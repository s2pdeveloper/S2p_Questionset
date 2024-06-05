import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})

export class SeminarService {
  routes: any = {
    createPath: `seminar`,
    getByIdPath: (id) => `seminar/${id}`,
    updatePath: (id) => `seminar/${id}`,
    deletePath: (id) => `seminar/${id}`,
  };
  constructor(private http: ApiService) {}

  addNewSeminar(payload) {
    return this.http.post(this.routes.createPath, payload);
  }

  updateSeminar(id, payload) {
    return this.http.put(this.routes.updatePath(id), payload);
  }

  getSeminarById(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }

  deleteSeminar(id) {
    return this.http.delete(this.routes.deletePath(id));
  }
}
