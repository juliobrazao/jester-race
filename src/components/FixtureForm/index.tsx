import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FixtureFormSchema, FixtureFormType } from "./types";
import { ContainerFluid } from "../Container";

export default function FixtureForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FixtureFormType>({
    resolver: zodResolver(FixtureFormSchema),
  });

  const handleSubmitForm = (data: FixtureFormType) =>
    alert(JSON.stringify(data));

  return (
    <ContainerFluid>
      <h1 style={{ background: "#fff" }}>Fixture Form</h1>

      <form
        style={{ textAlign: "left" }}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="mt-5">
          <label htmlFor="first_field" className="form-label">
            First Field
          </label>
          <input
            type="text"
            {...register("firstField")}
            className="form-control"
            id="first_field"
          />
          {errors?.firstField && (
            <small className="form-text text-danger">
              {errors.firstField.message}
            </small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="second_field" className="form-label">
            Second Field
          </label>
          <input
            type="text"
            {...register("secondField")}
            className="form-control"
            id="second_field"
          />
          {errors?.secondField && (
            <small className="form-text text-danger">
              {errors.secondField.message}
            </small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="third_field" className="form-label">
            Third Field
          </label>
          <input
            type="text"
            {...register("thirdField")}
            className="form-control"
            id="third_field"
          />
          {errors?.thirdField && (
            <small className="form-text text-danger">
              {errors.thirdField.message}
            </small>
          )}
        </div>
        <div className="mt-4">
          <button className="btn btn-primary w-100">Submit Info</button>
        </div>
      </form>
    </ContainerFluid>
  );
}
