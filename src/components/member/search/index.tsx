import React from "react";
import * as Material from "@material-ui/core";
import { useSearchStyles } from "../../common/style";

interface SearchPropsType {
  data?: any;
  handleOnChange: any;
  handleOnSearch: any;
}

const Search: React.FC<SearchPropsType> = (props) => {
  const classes = useSearchStyles();
  return (
    <>
      <div className={classes.yellowPageMainBlock}>
        <h3 className={classes.headerText}>Yellow Pages</h3>
        <div className={classes.searchInput}>
          <Material.TextField
            type="text"
            variant="outlined"
            name="search"
            className={classes.formInput}
            error={false}
            helperText=""
            onChange={props.handleOnChange}
          />
          <Material.Button
            className={classes.submitBtn}
            type="button"
            onClick={() => {
              props.handleOnSearch();
            }}
          >
            Search
          </Material.Button>
        </div>

        <div className={classes.dataBlock}>
          {props.data.length > 0 ? (
            props.data.map((item: any, index: number) => (
              <div key={index} className={classes.dataSub}>
                <h4 className={classes.name}>{item.name}</h4>
                <div className={classes.email}>Email: {item.email}</div>
                <div className={classes.phone}>Phone: {item.phone}</div>
              </div>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
