import { RightOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import './HomePromotion.css';

export default function HomePromotion() {
  return (
    <Fragment>
      <h1
        className="promotionHeading text-center font-bold"
        style={{
          color: "#00baff",
          fontSize: 30,
          paddingTop: 75,
          paddingBottom: 0,
        }}
      >
        ƯU ĐÃI ĐẶC BIỆT
      </h1>
      <div className="flex justify-center w-screen md:max-h-screen py-24 px-10">
        {/* Resice the preview panel to check the responsiveness */}
        {/* Component Start */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 max-w-6xl">
          {/* Tile 1 */}
          <div className="promotionTile flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div
              className="md:h-40 bg-gray-400 rounded-lg"
              style={{
                backgroundImage:
                  "url(https://www.odeon.co.uk/media/m4vphgic/microsoftteams-image-66.jpg)",
                ackgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex flex-col items-start md:mt-4">
              <h4 className="md:text-xl font-semibold text-white">
                Xem tất cả các bộ phim của chúng tôi chỉ từ 999K / tháng
              </h4>
              <p className="text-md">
                Giờ đây, bạn có thể xem tất cả các bộ phim của chúng tôi, bao
                nhiêu lần tùy thích, chỉ từ 999K một tháng *.
              </p>
              <p className="text-md">
                Ngoài ra, myLIMITLESS hiện có sẵn với thời hạn giảm tối thiểu 3
                tháng.
              </p>
              Hết hạn: 30/09/2021
              <a
                className="leading-none flex items-center rounded font-medium mt-3 text-md"
                href="#"
              >
                Tìm hiểu thêm <RightOutlined style={{fontSize:"0.8rem",paddingTop:3,marginLeft:3}} />
              </a>
            </div>
          </div>
          {/* Tile 2 */}
          <div className="promotionTile flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div
              className="md:h-40 bg-gray-400 rounded-lg"
              style={{
                backgroundImage:
                  "url(https://ichef.bbci.co.uk/news/976/cpsprodpb/F7BE/production/_105322436_gettyimages-843061956.jpg)",
                ackgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex flex-col items-start mt-4">
              <h4 className="md:text-xl font-semibold text-white">VÉ CINEMA SIÊU TIẾT KIỆM</h4>
              <p className="text-md">
              Trải nghiệm niềm vui điện ảnh cho ít người hơn với tư cách là thành viên myCINEMA.
              </p>
              <p className="text-md">
              Vé myCINEMA Saver có sẵn vào các buổi chiếu được chọn vào Thứ Ba-Chủ Nhật và cả ngày vào Thứ Hai của Thành viên, với giá chỉ từ 699K *.
              </p>
              <p className="text-md">
              Đăng ký miễn phí ngay hôm nay và tiết kiệm tiền với myCINEMA. 
              </p>
              <a
                className="leading-none flex items-center rounded font-medium mt-3 text-md"
                href="#"
              >
                Tìm hiểu thêm <RightOutlined style={{fontSize:"0.8rem",paddingTop:3,marginLeft:3}} />
              </a>
            </div>
          </div>
          {/* Tile 3 */}
          <div className="promotionTile flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <div
              className="md:h-40 bg-gray-400 rounded-lg"
              style={{
                backgroundImage:
                  "url(https://www.odeon.co.uk/media/i0wfmzqs/gift-cards_homepage-1-1.jpg)",
                ackgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex flex-col items-start mt-4">
              <h4 className="md:text-xl font-semibold text-white">myCINEMA Gift Card</h4>
              <p className="text-md">
                Cơ hội vô tận.
              </p>
              <p className="text-md">
              Tặng quà rạp chiếu phim bằng myCINEMA Gift Card và người bạn may mắn của bạn có thể sử dụng quà tặng của họ để thanh toán vé, đồ ăn nhẹ và đồ uống. 
              </p>
              <a
                className="leading-none flex items-center rounded font-medium mt-3 text-md"
                href="#"
              >
                Tìm hiểu thêm <RightOutlined style={{fontSize:"0.8rem",paddingTop:3,marginLeft:3}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
