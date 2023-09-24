import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
});

type FormType = z.infer<typeof FormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });

  const submitData = (data: FormType) => {
    setTimeout(() => {
      alert(`Hello ${data.name}! You are successfully subscribed!`);
      reset();
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label m-0">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name")}
          />
          <div
            data-testid="error-message-name"
            className="form-text text-danger"
          >
            {errors?.name?.message}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label m-0">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email")}
          />
          <div
            data-testid="error-message-email"
            className="form-text text-danger"
          >
            {errors?.email?.message}
          </div>
        </div>

        <div className="mb-3">
          <button
            className="btn btn-primary w-100 py-2 mt-3"
            disabled={isSubmitting}
          >
            <strong>Subscribe</strong>
            <div
              className={`spinner-border spinner-border-sm ${
                isSubmitting ? "" : "d-none"
              }`}
              role="status"
            ></div>
          </button>
        </div>
      </form>
    </>
  );
}
