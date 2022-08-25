import React, { Component } from "react";
import { Tabs, TabPanel } from "react-tabs";
class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      {" "}
                      Хэвлэл мэдээллийн боловсрол нь нийгэм дэх хэвлэл
                      мэдээллийн үүргийн талаарх ойлголтыг бий болгохоос гадна
                      ардчилсан орны иргэдэд зайлшгүй шаардлагатай эрэл хайгуул,
                      өөрийгөө илэрхийлэх ур чадварыг бий болгодог.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Center </span> for media literacy
                    </h6>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
