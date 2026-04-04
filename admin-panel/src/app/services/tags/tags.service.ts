import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  routes: any = {
    createPath: `/tag/create`,
    getAllPath: (params) =>
      `/tag/getAll?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
    getByIdPath: (id) => `/tag/getById/${id}`,
    updatePath: (id) => `/tag/update/${id}`,
    deletePath: (id) => `/tag/delete/${id}`,
    getListPath: `/tag/list`,
  };
  constructor(private http: ApiService) {}

  getAllTags(params) {
    return this.http.get(this.routes.getAllPath(params));
  }

  getTagById(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }

  createTag(data) {
    return this.http.post(this.routes.createPath, data);
  }

  updateTag(data, id) {
    return this.http.put(this.routes.updatePath(id), data);
  }

  deleteTag(id) {
    return this.http.delete(this.routes.deletePath(id));
  }

  getTagList() {
    return this.http.get(this.routes.getListPath);
  }
}
