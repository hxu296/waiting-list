const withDefault = (prop, original = null) => prop ? prop : original;
const responseMapper = (event) => ({
  status: event.status,
  message: event.message,
  statusCode: event.code
});
const successMapper = (event) => ({
  ...responseMapper({
    status: "success",
    message: event.message,
    code: withDefault(event.code, 200)
  }),
  data: withDefault(event.data, [])
});
const errorMapper = (event) => ({
  error: withDefault(event.error, {}),
  ...responseMapper({
    status: "failed",
    message: event.message,
    code: withDefault(event.code, 400)
  })
});
export {
  errorMapper as e,
  successMapper as s,
  withDefault as w
};
