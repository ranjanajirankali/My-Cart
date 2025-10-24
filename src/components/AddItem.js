import React from "react";

class AddItem extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.inputName.value.trim();
    const price = parseFloat(e.target.inputPrice.value);

    if (!name || isNaN(price) || price <= 0) {
      alert("Please enter a valid name and price!");
      return;
    }

    this.props.addItem(name, price);
    e.target.reset();
  };

  render() {
    return (
      <form className="row mb-5 add-item-form" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-5">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Product Name"
            required
          />
        </div>

        <div className="mb-3 col-5">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            placeholder="Enter Price"
            required
          />
        </div>

        <div className="col-2 d-flex align-items-end">
          <button type="submit" className="btn btn-primary w-100 add-btn">
            Click to Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
