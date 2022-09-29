import React, { useState, useEffect } from "react";
import Search from "../member/search";
import axios from "axios";
import { usePagesStyles } from "../common/style";
import AddNewMember from "../member/add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ErrorType = {
  [key: string]: string;
};

export declare type MemberType = {
  name?: string;
  email?: string;
  phone?: string;
};

const initialMemberValue: MemberType = {
  name: "",
  email: "",
  phone: "",
};

interface YellowPagePropsType {
  children?: React.ReactNode;
}

const YellowPage: React.FC<YellowPagePropsType> = (props) => {
  const classes = usePagesStyles();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [newMemberAdd, setNewMemberAdd] = useState<any>(initialMemberValue);
  const [errors, setErrors] = React.useState<ErrorType>(initialMemberValue);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(
        response.data.map((item: any, index: number) => {
          return {
            id: index + 1,
            name: item.name,
            email: item.email,
            phone: item.phone,
          };
        })
      );
    } catch (err: any) {
      setData([]);
    }
  };

  const arraySearch = (array: any, keyword: any) => {
    const searchTerm = keyword.toLowerCase();

    return array.filter((value: any) => {
      return (
        value.name.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.email.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.phone.toLowerCase().match(new RegExp(searchTerm, "g"))
      );
    });
  };

  const handleOnChange = async (e: any) => {
    let value = e.target.value;
    setSearchValue(value);
  };

  const handleOnSearch = async (e: any) => {
    let search = await arraySearch(data, searchValue);
    if (searchValue === "") {
      getData();
    } else {
      setData(search);
    }
  };

  /**
   * handleChange new member object & setErrors empty string
   * when input value change
   * @param name string
   * @param value string | null
   */
  const handleChange = (name: string, value: string | null) => {
    setNewMemberAdd((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "email") {
      if (!isValidEmail(value)) {
        setErrors({ email: "Invalid email address" });
      }
    }

    if (name === "phone") {
      if (!validatePhoneNumber(value)) {
        setErrors({ phone: "Invalid phone number" });
      }
    }
  };

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validatePhoneNumber(phone: any) {
    // eslint-disable-next-line
    var regex = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    return regex.test(phone);
  }

  /**
   * this function check validation of memo form
   * @returns boolean
   */
  const isValid = () => {
    let hasError = false;
    const copyErrors = { ...errors } as ErrorType;

    const validationFields = ["name", "email", "phone"];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        !newMemberAdd[key as keyof MemberType]
      ) {
        copyErrors[key] = `The ${key} is required`;
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }

    setErrors(copyErrors);
    return hasError;
  };

  /**
   * this function check validation of form
   * and if validation success then set New Member data
   * @returns void
   */
  const handleSubmit = async (e: any) => {
    if (isValid()) {
      return;
    }
    if (!isValidEmail(newMemberAdd.email)) {
      setErrors({ email: "Invalid email address" });
      return;
    }
    if (!validatePhoneNumber(newMemberAdd.phone)) {
      setErrors({ phone: "Invalid phone number" });
      return;
    }

    let MemberArray: any = data;
    MemberArray.push({ id: MemberArray.length + 1, ...newMemberAdd });
    MemberArray.sort(function (a: any, b: any) {
      return b.id - a.id;
    });
    setData(MemberArray);
    setNewMemberAdd(initialMemberValue);
    toast("Data successfully saved");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={classes.mainBlock}>
        <div className={classes.leftBlock}>
          <Search
            data={data}
            handleOnChange={handleOnChange}
            handleOnSearch={handleOnSearch}
          />
        </div>
        <div className={classes.rightBlock}>
          <AddNewMember
            handleChange={handleChange}
            newMemberAdd={newMemberAdd}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default YellowPage;
