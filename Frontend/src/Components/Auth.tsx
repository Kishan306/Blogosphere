import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import { EyeSvg } from "../Resources/SVG";
// import axios from "axios";
// import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  // const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  // async function sendRequest() {
  //     try {
  //         const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
  //         const jwt = response.data;
  //         localStorage.setItem("token", jwt);
  //         navigate("/blogs");
  //     } catch(e) {
  //         alert("Error while signing up")
  //         // alert the user here that the request failed
  //     }
  // }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Harkirat Singh..."
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="harkirat@gmail.com"
              type="email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                console.log("Hello");
              }}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {

    const [view,Setview] = useState(type);
  return (
    <div>
      <label className="block pt-4 mb-2 text-sm font-semibold text-black">
        {label}
      </label>
      <div className="flex items-center gap-2 border border-gray-300 text-gray-900 rounded-lg bg-gray-50  p-2.5 focus:ring-blue-500 focus:border-blue-500" >
        <input
          onChange={onChange}
          type={view}
          id="first_name"
          className="w-full bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          required
        />
        {type==="password"?
            <button onClick={()=>{
                Setview("text");
                setTimeout(()=>{Setview("password")},500)
            }}>
                <EyeSvg/>
            </button>
        :null}
      </div>
    </div>
  );
}
