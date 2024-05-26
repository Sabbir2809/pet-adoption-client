export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];

  if (file) {
    delete obj["file"];
  }

  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);

  if (file) {
    formData.append("file", file as Blob);
  }

  // Alternative logging without causing type errors
  console.log("FormData content:");
  Array.from(formData.entries()).forEach(([key, value]) => {
    console.log(key, value);
  });

  return formData;
};
