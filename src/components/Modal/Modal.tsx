import Form from "../Form/Form";

export default function Modal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        Subscribe to this system
      </button>

      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                <strong>Subscription</strong>
              </h5>
              <button
                type="button"
                className="btn-close px-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
