import interceptor from "./interceptor";

function query(uri, param) {
  return interceptor({
    url: uri,
    method: "get",
    params: param,
  });
}

function get(uri, id = "") {
  return interceptor({
    url: `${uri}/${id}`,
    method: "get",
  });
}

function post(uri, resource) {
  return interceptor.post(uri, resource);
}

function update(uri, resource) {
  return interceptor({
    url: uri,
    method: "put",
    data: resource,
  });
}

function destroy(uri) {
  return interceptor({
    url: uri,
    method: "delete",
  });
}

function create(uri) {
  return interceptor({
    url: `${uri}/create`,
    method: "get",
  });
}

export default {
  query,
  get,
  post,
  update,
  destroy,
  create,
};
