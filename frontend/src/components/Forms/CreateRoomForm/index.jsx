const CreateRoomForm = () => {
  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter Your Name"
        />
        <div className="form-group border">
          <div className="input-group d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="form-control my-2 border-0"
              disabled
              placeholder="Generate Room ID"
            />
            <div className="input-group-append">
              <button className="btn btn-primary btn-sm me-1" type="button">
                Generate ID
              </button>
              <button
                className="btn btn-outline-danger btn-sm me-2"
                type="button"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block form-control mt-4">
        Generate Room
      </button>
    </form>
  );
};

export default CreateRoomForm;
