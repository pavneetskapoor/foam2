/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

package foam.nanos.http;

import foam.box.*;
import foam.core.*;
import java.io.IOException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

public class ServiceWebAgent
  implements WebAgent
{
  protected Object service_;
  protected Box    skeleton_;

  public ServiceWebAgent(Object service, Box skeleton) {
    service_  = service;
    skeleton_ = skeleton;
  }

  public void execute(X x) {
    HttpServletRequest req = (HttpServletRequest)x.get("httpRequest");
    HttpServletResponse resp = (HttpServletResponse)x.get("httpResponse");
    ServiceServlet ss = new ServiceServlet(service_, skeleton_);
    ss.setX(x);
    try {
      ss.service(req, resp);
    } catch (ServletException | IOException ex) {

    }
  }
}
