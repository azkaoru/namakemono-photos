import { useTranslation } from "next-i18next";
import React from "react";

const Container = () => {
  const { t } = useTranslation("newsletter");

  return (
      <div className="container">
          <div className="row">
              <div className="col-xs-12 col-md-8">
                  <dl>
                      <dt className="menuTab">半蔵</dt>

                      <img src="images/test.jpg" className="img-responsive center-block" alt="Responsive image"/>
                      <hr/>

                      <img src="images/test2.jpg" className="img-responsive center-block" alt="Responsive image"/>
                      <hr/>

                      <dt className="menuTab">さくら</dt>
                      <img src="images/test.jpg" className="img-responsive center-block" alt="Responsive image"/>
                      <hr/>

                      <img src="images/test2.jpg" className="img-responsive center-block" alt="Responsive image"/>
                      <hr/>


                      <dt className="menuTab">はなこ</dt>
                      <img src="images/test.jpg" className="img-responsive center-block" alt="Responsive image"/>
                      <hr/>

                      <img src="images/test2.jpg" className="img-responsive center-block" alt="Responsive image"/>
                      <hr/>

                  </dl>
              </div>
              <div className="col-xs-12 col-md-4">
                  <p className="menuLine">Photo Infomation</p>
                  <div className="list-group" styles={{height: '300px', overflowY: 'scroll;'}}>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.3"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">半蔵 Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>半蔵の写真が2021年10月28日に登録されました。</p>
                      </a>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.2"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">さくら Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>さくらの写真が2021年10月28日に登録されました。</p>
                      </a>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.1"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">TUBAME 1.1.1 Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>ゆきむらの写真が2021年10月28日に登録されました。</p>
                      </a>


                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.3"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">半蔵 Released</h4>
                          <p className="list-group-item-text"
                             sstyles={{fontSize: '12px'}}>半蔵の写真が2021年10月28日に登録されました。</p>
                      </a>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.2"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">さくら Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>さくらの写真が2021年10月28日に登録されました。</p>
                      </a>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.1"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">ゆきむら Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>ゆきむらの写真が2021年10月28日に登録されました。</p>
                      </a>


                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.3"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">半蔵 Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>半蔵の写真が2021年10月28日に登録されました。</p>
                      </a>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.2"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">さくら Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>さくらの写真が2021年10月28日に登録されました。</p>
                      </a>

                      <a href="https://github.com/TUBAME/migration-tool/releases/tag/v1.1.1"
                         className="list-group-item">
                          <h4 className="list-group-item-heading">ゆきむら Released</h4>
                          <p className="list-group-item-text"
                             styles={{fontSize: '12px'}}>ゆきむらの写真が2021年10月28日に登録されました。</p>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Container;
