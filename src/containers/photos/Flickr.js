import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { empty } from 'rxjs/observable/empty'

export default new class Flickr {
  _parseQuery(query) {
    return Object.keys(query).reduce((a,k) => {
      if(query[k]) a.push(`${k}=${query[k]}`);
      return a;
    }, []).join('&');
  }

  _getURL(method, query) {
    Object.assign(query, {
      api_key: '328531f8cc4cb07d65e1a4316c8c5a1d',
      format: 'json',
      nojsoncallback: 1,
      method: `flickr.${method}`,
    });
    return `https://api.flickr.com/services/rest/?${this._parseQuery(query)}`;
  }

  _getSize(photo_id, size) {
    return this._fetch(this._getURL('photos.getSizes', {photo_id}))
      .filter(data => data.code !== 1)
      .map(data => data.sizes.size[0])
      .pluck('source')
  }

  _getPublicPhotos() {
    return this._fetch(this._getURL('people.getPublicPhotos', {
      user_id: '48988818%40N08',
    }));
  }

  _fetch(url) {
    let options = {
      url,
      method: 'GET',
      crossDomain: true,
    };
    return ajax(options).map(res => res.response).catch(function (error) {
        console.log('error:', error);
        return empty();
    });
  }

  photos() {
    return this._getPublicPhotos()
      .map(data => data.photos.photo)
      .flatMap((photos) =>
        Observable.forkJoin(
          photos.map(({id}) => this._getSize(id, 'Large 1600'))
        )
      )
  }
}
