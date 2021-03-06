/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.mlang;

import foam.dao.Sink;
import foam.mlang.predicate.*;
import foam.mlang.sink.*;

/**
 * Static helper functions for creating MLangs.
 *
 * Usage: import foam.mlang.MLang.*;
 */
public class MLang
{

  public static Expr prepare(Object o) {
    return o instanceof Expr ? (Expr) o : new Constant(o);
  }

  public static Predicate LT(Object o1, Object o2) {
    return new Lt(MLang.prepare(o1), MLang.prepare(o2));
  }

  public static Predicate LTE(Object o1, Object o2) {
    return new Lte(MLang.prepare(o1), MLang.prepare(o2));
  }

  public static Predicate EQ(Object o1, Object o2) {
    return new Eq(MLang.prepare(o1), MLang.prepare(o2));
  }

  public static Predicate GTE(Object o1, Object o2) {
    return new Gte(MLang.prepare(o1), MLang.prepare(o2));
  }

  public static Predicate GT(Object o1, Object o2) {
    return new Gt(MLang.prepare(o1), MLang.prepare(o2));
  }

  public static Predicate AND(Predicate... args) {
    return new And(args);
  }

  public static Predicate OR(Predicate... args) {
    return new Or(args);
  }

  public static Sink MAX(Object o1) {
    return new Max(0, MLang.prepare(o1));
  }

  public static Sink MIN(Object o1) {
    return new Min(0, MLang.prepare(o1));
  }
}
