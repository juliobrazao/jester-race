export default function Form() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Choose file
        </label>
        <input
          type="file"
          className="form-control"
          name=""
          id=""
          placeholder=""
          aria-describedby="fileHelpId"
        />
        <div id="fileHelpId" className="form-text">
          Help text
        </div>
      </div>
    </>
  );
}
