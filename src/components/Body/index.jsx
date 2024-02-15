import Icon from "../../images/Icon.png";
import Image1 from "../../images/Img.png";
import Image2 from "../../images/Img2.png";

export default function Body() {
  return (
    <div
      style={{
        padding: "0px 160px 0px 160px",
        gap: "45px",
        fontFamily: "Inter",
        letterSpacing: "0em",
        textAlign: "left",
      }}
    >
      <div
        style={{ height: "310px" }}
        className="d-flex justify-content-between border-bottom border-2 mb-5"
      >
        <div
          style={{ width: "755px" }}
          className="d-flex flex-column justify-content-around"
        >
          <div
            style={{ fontSize: "14px" }}
            className="d-flex justify-content-between align-items-start w-50  mt-0"
          >
            <img src={Image1} alt="" />
            <p className="">Authors name</p>
            <p className="text-secondary">in</p>
            <p>Topics name</p>
            <p>·</p>
            <p></p>
          </div>
          <p style={{ width: "693px" }}>
            <h4
              style={{
                fontFamily: "Inter",
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              7 Practical CSS Tips
            </h4>
            <p style={{ fontSize: "16px" }}>
              You not only learn more Python by implementing what you already
              know but, in the end, you can see how all your hard work pays off.
            </p>
          </p>
          <div
            style={{
              width: "755px",
              gap: "325px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
            className="d-flex justify-content-between align-items-baseline "
          >
            <div
              style={{ width: "400px" }}
              className="d-flex justify-content-between g-5 align-items-baseline"
            >
              <button
                style={{ fontSize: "14px" }}
                className="btn btn-secondary btn-lg rounded-pill"
              >
                Java Script
              </button>
              <p>12 min read</p>
              <p>Selected to you</p>
            </div>
            <div
              style={{ width: "100px", gap: "14px" }}
              className="d-flex justify-content-between"
            >
              <img src={Icon} alt="Square" />
              <img src={Icon} alt="Square" />
              <img src={Icon} alt="Square" />
            </div>
          </div>
        </div>
        <img
          style={{ height: "265px", borderRadius: "4px" }}
          src={Image2}
          alt=""
        />
      </div>
    </div>
  );
}
