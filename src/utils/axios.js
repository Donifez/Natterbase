import axios from "axios";

const instance = axios.create({
 baseURL: "http://test.natterbase.com:5050/api/",
 headers: {
   "Content-Type": "application/json",
//    "x-access-token": localStorage.getItem("token")
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
 }
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;