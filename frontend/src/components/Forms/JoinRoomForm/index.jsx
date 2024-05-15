const JoinRoomForm = () => {
  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2 "
          placeholder="Enter Room ID"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block form-control mt-4">
        Join Room
      </button>
    </form>
  );
};

export default JoinRoomForm;
