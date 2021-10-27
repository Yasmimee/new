

function FlipCard() {
    return (
        <div className="flipcard">

          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="style.css" />
          <title>Document</title>
          <div className="wrapper">
            <h1>لعبة الورق</h1>
            <div className="flip-cols">
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://cdn.vectorstock.com/i/1000x1000/12/39/bed-vector-1201239.jpg)'}}>
                    <div className="flip-inner">
                      {/* <p></p> */}
                      {/* <span>سرير</span> */}
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>سرير</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://static9.depositphotos.com/1216711/1192/v/600/depositphotos_11924951-stock-illustration-antique-wooden-round-table-isolated.jpg)'}}>
                    <div className="flip-inner">
                      <p />
                      <span />
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>طاولة</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://cdn.vectorstock.com/i/1000x1000/77/23/flat-window-with-curtains-on-brown-wall-vector-18147723.jpg)'}}>
                    <div className="flip-inner">
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>شباك</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://cdn1.vectorstock.com/i/1000x1000/59/00/orange-entrance-door-to-house-closed-elegant-door-vector-17525900.jpg)'}}>
                    <div className="flip-inner">
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>باب</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://png.pngtree.com/png-vector/20191029/ourlarge/pngtree-rose-vector-logo-icon-template-isolated-on-white-background-png-image_1870361.jpg'}}>
                    <div className="flip-inner">
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>ورد</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://cdn1.vectorstock.com/i/1000x1000/21/75/a-giant-tree-vector-2832175.jpg)'}}>
                    <div className="flip-inner">
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>شجرة</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://www.nicepng.com/png/detail/145-1454060_blue-bird-vector-by-blackstar-deviantart.png)'}}>
                    <div className="flip-inner">
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>عصفور</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-col" ontouchstart="this.classList.toggle('hover');">
                <div className="flip-container">
                  <div className="flip-front" style={{backgroundImage: 'url(https://images.all-free-download.com/images/graphiclarge/cute_dog_vector_278980.jpg)'}}>
                    <div className="flip-inner">
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-inner">
                      <p>كلب</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
}
export default FlipCard