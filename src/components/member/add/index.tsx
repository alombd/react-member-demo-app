import React from "react";
import * as Material from "@material-ui/core";
import { useAddMemberStyles } from "../../common/style";

interface AddNewMemberPropsType {
  data?: any;
  handleChange?: any;
  newMemberAdd: any;
  errors: any;
  handleSubmit: any;
}

const AddNewMember: React.FC<AddNewMemberPropsType> = (props) => {
  const classes = useAddMemberStyles();
  return (
    <>
      <div className={classes.addMember}>
        <h3>Add New Member</h3>
        <div className={classes.fromInputBlock}>
          <label className={classes.label}>
            Name <span className={classes.required}>*</span>
          </label>
          <Material.TextField
            type="text"
            variant="outlined"
            name="name"
            className={classes.formInput}
            error={Boolean(props.errors.name)}
            helperText=""
            value={props.newMemberAdd.name}
            onChange={(event) => {
              props.handleChange("name", event.target.value);
            }}
          />

          <span style={{ color: "red" }}>
            {Boolean(props.errors.name) && props.errors.name}
          </span>
        </div>

        <div className={classes.fromInputBlock}>
          <label className={classes.label}>
            E-mail <span className={classes.required}>*</span>
          </label>
          <Material.TextField
            type="email"
            variant="outlined"
            name="email"
            className={classes.formInput}
            value={props.newMemberAdd.email}
            error={Boolean(props.errors.email)}
            helperText=""
            onChange={(event) => {
              props.handleChange("email", event.target.value);
            }}
          />
          <span style={{ color: "red" }}>
            {Boolean(props.errors.email) && props.errors.email}
          </span>
        </div>

        <div className={classes.fromInputBlock}>
          <label className={classes.label}>
            Phone <span className={classes.required}>*</span>
          </label>
          <Material.TextField
            type="text"
            variant="outlined"
            name="phone"
            value={props.newMemberAdd.phone}
            className={classes.formInput}
            error={Boolean(props.errors.phone)}
            helperText=""
            onChange={(event) => {
              props.handleChange("phone", event.target.value);
            }}
          />
          <span style={{ color: "red" }}>
            {Boolean(props.errors.phone) && props.errors.phone}
          </span>
        </div>
        <div className={classes.btnBlock}>
          <Material.Button
            className={classes.submitBtn}
            type="reset"
            onClick={() => {}}
          >
            Cancel
          </Material.Button>
          <Material.Button
            className={classes.submitBtn}
            type="button"
            onClick={(e: any) => {
              props.handleSubmit(e);
            }}
          >
            Add
          </Material.Button>
        </div>
      </div>
    </>
  );
};

export default AddNewMember;
