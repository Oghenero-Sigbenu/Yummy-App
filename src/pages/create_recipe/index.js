import Navbar from "../../components/navbar";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function AddRecipe() {
    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
      });
      const { fields, append } = useFieldArray({
        control,
        name: "test"
      });
    const remove = () => {
    }
    return (
      <div className="recipe">
          <Navbar/>
         <div className="auth text-center">
             <h6>Upload recipe photo</h6>
             <p>Encourage others to cook</p>
            <form onSubmit={handleSubmit(data => console.log(data))}>
            <div className="form-element">
               <input type="text" name="name" placeholder="Title: Jollof Rice"/>
           </div>
           <div className="form-element">
               <textarea type="text" placeholder="Tell us about your recipe, who inspired it etc" />
           </div>
           <div className="form-element">
               <input type="text" name="steps " />
           </div>
           <div className="form-element">
               <input type="text" name="ingredirts " />
           </div>
           <ul className="array-input">
        {fields.map((item, index) => (
          <li key={item.id}>
            {/* <input {...register(`test.${index}.firstName`)} /> */}
            <Controller
              render={({ field }) =>   <div className="form-element">
                  <input placeholder="Name"{...field} />
                  <FontAwesomeIcon onClick={() => remove(index)} className="pt-1" icon={faTrashAlt}  /> 
                  </div>}
              name={`test.${index}.lastName`}
              control={control}
            />
           
          </li>
        ))}
      </ul>
      <h6
        onClick={() => append({ })}
      >
        <FontAwesomeIcon className="pt-1" icon={faPlus}  /> Ingredients
      </h6>
           <div className="form-element mt-3">
              <button className="btn-pry ">Register</button>
           </div>
            </form>
         </div>
      </div>
    );
  }
  
  export default AddRecipe;
  