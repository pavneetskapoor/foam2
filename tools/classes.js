/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

var classes = [
  'foam.core.Serializable',
  'foam.mlang.predicate.Predicate',
  'foam.mlang.predicate.True',
  'foam.mlang.predicate.False',
  'foam.mlang.predicate.And',
  'foam.mlang.predicate.Gt',
  'foam.mlang.predicate.Or',
  'foam.mlang.predicate.AbstractPredicate',
  'foam.mlang.predicate.Nary',
  'foam.mlang.predicate.Unary',
  'foam.mlang.predicate.Binary',
  'foam.mlang.predicate.Contains',
  'foam.mlang.predicate.StartsWithIC',
  'foam.mlang.predicate.Gt',
  'foam.mlang.predicate.Gte',
  'foam.mlang.predicate.Lt',
  'foam.mlang.predicate.Lte',
  'foam.mlang.predicate.Has',
  'foam.mlang.F',
  'foam.mlang.Expr',
  'foam.mlang.AbstractExpr',
  'foam.mlang.predicate.Eq',
  'foam.mlang.Constant',
  'foam.box.Box',
  'foam.box.Skeleton',
  'foam.box.ProxyBox',
  'foam.box.SubBox',
  'foam.box.Message',
  'foam.box.SubBoxMessage',
  'foam.box.SubscribeMessage',
  'com.google.foam.demos.appengine.TestModel',
  'foam.box.HTTPReplyBox',
  'com.google.foam.demos.appengine.TestService',
  'com.google.foam.demos.heroes.Hero',
  'com.google.auth.TokenVerifier',
  'foam.box.RPCMessage',
  'foam.box.RPCReturnMessage',
  'foam.box.BoxRegistry',
  'foam.box.BoxRegistryBox',
  'foam.box.CheckAuthenticationBox',
  'foam.dao.DAO',
  'foam.dao.Sink',
  'foam.dao.AbstractSink',
  'foam.mlang.sink.AbstractUnarySink',
  'foam.dao.PredicatedSink',
  'foam.dao.OrderedSink',
  'foam.dao.LimitedSink',
  'foam.dao.SkipSink',
  'foam.dao.RelationshipPropertyValue',
  'foam.mlang.order.Comparator',
  'foam.mlang.sink.Count',
  'foam.mlang.sink.Max',
  'foam.mlang.sink.Min',
  'foam.mlang.sink.Sum',
  'foam.nanos.NanoService',
  'foam.nanos.boot.NSpec',
  'foam.nanos.auth.EnabledAware',
  'foam.nanos.auth.Group',
  'foam.nanos.auth.LastModifiedAware',
  'foam.nanos.auth.LastModifiedByAware',
  'foam.nanos.auth.Permission',
  'foam.nanos.auth.User',
  'foam.nanos.auth.AuthService',
  'foam.nanos.pool.AbstractFixedThreadPool',
  'foam.nanos.pm.PMInfo',
  'foam.nanos.script.Language',
  'foam.nanos.script.Script',
  'foam.nanos.test.Test',
  'foam.nanos.cron.Cron',
  'foam.dao.history.PropertyUpdate',
  'foam.dao.history.HistoryRecord',
  'foam.mop.MOP'
];

var abstractClasses = [
//  'foam.json.Outputer'
];

var skeletons = [
  'com.google.foam.demos.appengine.TestService',
  'foam.dao.DAO',
  'foam.mop.MOP'
];

var proxies = [
  'foam.dao.DAO',
  'foam.dao.Sink',
  'com.google.foam.demos.appengine.TestService',
  'foam.mop.MOP'
];

module.exports = {
    classes: classes,
    abstractClasses: abstractClasses,
    skeletons: skeletons,
    proxies: proxies
}
