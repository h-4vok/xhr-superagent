import { XhrImplementor, HttpVerbs } from 'xhr-bridge';
import superagent from 'superagent';

export default class XhrSuperagentImplementor extends XhrImplementor {
  handlers = {
    [HttpVerbs.get]: this.get,
    [HttpVerbs.post]: this.post,
    [HttpVerbs.put]: this.put,
    [HttpVerbs.patch]: this.patch,
    [HttpVerbs.del]: this.del
  };

  execute(req) {
    super(req);

    const closure = this.handlers[req.verb];
    if (!closure) {
      throw new Error(`The request verb ${req.verb} cannot be handled by XhrSuperagentImplementor.`);
    }

    closure(req);
  }

  doWithQuery = verb => req =>
    superagent[verb](req.route)
      .set(req.headers)
      .query(req.queries)
      .end((err, res) => this.responseImplementor.handleResponse(req, err, res));

  doWithBody = verb => req =>
    superagent[verb](req.route)
      .set(req.headers)
      .send(req.body)
      .end((err, res) => this.responseImplementor.handleResponse(req, err, res));

  get = req => this.doWithQuery('get')(req);

  del = req => this.doWithQuery('del')(req);

  post = req => this.doWithBody('post')(req);

  put = req => this.doWithBody('put')(req);

  patch = req => this.doWithBody('patch')(req);
}
