/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.nanos.http;

import foam.core.*;
import foam.dao.DAO;
import foam.dao.AbstractSink;
import foam.nanos.boot.NSpec;
import java.io.PrintWriter;

public class ServiceWebAgent
  implements WebAgent
{
  public ServiceWebAgent() {}

  public void execute(X x) {
    try {
      X          requestContext = getX().put("httpRequest", req).put("httpResponse", resp);
    } catch (Throwable t) {
      System.err.println("Error: " +  t);
      t.printStackTrace();
    }

  }
}
