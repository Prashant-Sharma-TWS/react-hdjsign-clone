import axios from "axios";
import React, { useState } from "react";

export const Upload = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    budget: "",
    image: "",
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    for (let x in formData) {
      fd.append(x, formData[x]);
    }

    axios
      .post("/mail", fd)
      .then((res) => console.log(res));
  };

  return (
    <>
      <h3>HDJsign ® Neon Mockup</h3>
      <h4>STORE INFORMATION</h4>
      <p>
        We'd love to hear from you - please use the form to send us your message
        or ideas. Or contact us directly with the Messenger below.
      </p>
      <div className="address">
        <p>
          Shop Name: <b>HDJ Sign</b>
        </p>
        <p>1042 Broadway Street, STE 314C</p>
        <p>Boulder CO 80302</p>
        <p>Unite States</p>
      </div>
      <div className="timing">
        <p>
          <b>Opening Hours:</b>
        </p>
        <p>Monday to Saturday: 9am - 10pm</p>
        <p>Sundays: 10am - 6pm</p>
      </div>
      <form onSubmit={handleSubmit} className="form-upload flex-bt-c">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>* (only used to communicate about your order)</p>
        <label>Phone*</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <p>* (only used to communicate about your order)</p>
        <label>Approximate size "inches" (length/height)</label>
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
        />
        <h6>
          • Wording / design (or attach an image) • Colors and fonts • Any other
          requirements / notes • How soon do you need the sign?
        </h6>
        <label htmlFor="budget">Budget IDEA</label>
        <select name="budget" id="budget" onChange={handleChange}>
          <option value=""> Please Select </option>
          <option value="$ 100"> $ 100 </option>
          <option value="$ 200"> $ 200 </option>
          <option value="$ 300"> $ 300 </option>
          <option value="$ 400"> $ 400 </option>
          <option value="$ 500"> $ 500 </option>
          <option value="$ 600"> $ 600 </option>
          <option value="$ 700"> $ 700 </option>
          <option value="$ 800"> $ 800 </option>
          <option value="$ 900"> $ 900 </option>
          <option value="$ 1000"> $ 1000 </option>
          <option value="$ 1100"> $ 1100 </option>
          <option value="$ 1200"> $ 1200 </option>
          <option value="$ 1300"> $ 1300 </option>
          <option value="$ 1400"> $ 1400 </option>
          <option value="$ 1500"> $ 1500 </option>
          <option value="$ 1600"> $ 1600 </option>
          <option value="$ 1700"> $ 1700 </option>
          <option value="$ 1800"> $ 1800 </option>
          <option value="$ 1900"> $ 1900 </option>
          <option value="$ 2000"> $ 2000 </option>
        </select>
        <input
          type="file"
          name="image"
          style={{ marginTop: "15px", border: "none" }}
          onChange={handleChange}
        />
        {/* <label className="label">
          <input
            type="file"
            className="image-upload"
            name="image"
            onChange={handleChange}
            required
          />
          <span>
            {formData.image ? "1 File Uploaded" : "ADD ATTACHMENT or ARTWORK"}
          </span>
        </label> */}
        <p>
          Max file size: 10000 KB | Allow file types: ai, eps, gif, jpg, jpeg,
          pdf, png, tiff | Max number of files: 4
        </p>
        <button type="submit">GET A FREE QUOTE &amp; MOCKUP </button>
      </form>
    </>
  );
};
