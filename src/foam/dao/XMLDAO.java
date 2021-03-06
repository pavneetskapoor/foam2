package foam.dao;

import org.w3c.dom.Document;
import foam.core.*;
import java.io.FileWriter;
import java.io.IOException;
import java.io.FileNotFoundException;
import javax.xml.stream.XMLOutputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamWriter;
import java.util.List;
import java.util.Iterator;

public class XMLDAO
  extends MapDAO
{

  protected String fileName;

  public void setFileName(String filename) {git
    if ( filename.contains(".xml") ) {
      fileName = System.getProperty("user.dir") + filename;
    } else {
      fileName = System.getProperty("user.dir") + filename.concat(".xml");
    }
  }

  public String getFileName() { return fileName; }

  // Read file and read data in the DAO
  public void init() throws IOException {
    List<FObject> objList;

    try {
      objList = XMLSupport.fromXML(this.getX(), fileName);
      Iterator i = objList.iterator();
      while ( i.hasNext() ) {
        FObject currentObj = (FObject)i.next();
        ClassInfo clsInfo = currentObj.getClassInfo();
        this.setOf(clsInfo);
        this.putOnly(currentObj);
      }
    } catch ( FileNotFoundException ex) {
    }
  }

  // Rewrites file when new object is put into DAO
  public FObject put(FObject obj) {
    this.setOf(obj.getClassInfo());
    FObject s = super.put(obj);
    saveToXML();
    return s;
  }

  // Used for xml to FObject conversion where re-write is not required
  public FObject putOnly(FObject obj) {
    this.setOf(obj.getClassInfo());
    return super.put(obj);
  }

  public FObject remove(FObject obj) {
    FObject s = super.remove(obj);
    saveToXML();
    return s;
  }

  public void removeAll() {
    super.removeAll();
    saveToXML();
  }

  public void saveToXML () {
    ListSink ls = new ListSink();
    this.select(ls);

    try {
      DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
      DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
      Document doc = dBuilder.newDocument();
      XMLSupport.toXML(ls.getData(), doc, null);
      XMLSupport.toXMLFile(doc, fileName);
    } catch (ParserConfigurationException ex) {
    }
  }
}
