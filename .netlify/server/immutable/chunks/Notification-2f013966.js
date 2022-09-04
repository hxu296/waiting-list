var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  F: () => ForgotPasswordSchema,
  N: () => Notification,
  R: () => ResetPasswordSchema,
  S: () => SignInSchema,
  W: () => WaitingListSchema,
  a: () => SignUpSchema,
  c: () => createForm
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6a50b39d = require("./index-6a50b39d.js");
var import_index_0b98f2d1 = require("./index-0b98f2d1.js");
var import_vest = __toESM(require("vest"));
var import_pragmatic_email_regex = __toESM(require("pragmatic-email-regex"));
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)();
  });
}
function update(object, path, value) {
  object.update((o) => {
    set(o, path, value);
    return o;
  });
}
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}
function isNullish(value) {
  return value === void 0 || value === null;
}
function isEmpty(object) {
  return isNullish(object) || Object.keys(object).length <= 0;
}
function getValues(object) {
  let results = [];
  for (const [, value] of Object.entries(object)) {
    const values = typeof value === "object" ? getValues(value) : [value];
    results = [...results, ...values];
  }
  return results;
}
function getErrorsFromSchema(initialValues, schema, errors = {}) {
  for (const key in schema) {
    switch (true) {
      case (schema[key].type === "object" && !isEmpty(schema[key].fields)): {
        errors[key] = getErrorsFromSchema(initialValues[key], schema[key].fields, { ...errors[key] });
        break;
      }
      case schema[key].type === "array": {
        const values = initialValues && initialValues[key] ? initialValues[key] : [];
        errors[key] = values.map((value) => {
          const innerError = getErrorsFromSchema(value, schema[key].innerType.fields, { ...errors[key] });
          return Object.keys(innerError).length > 0 ? innerError : "";
        });
        break;
      }
      default: {
        errors[key] = "";
      }
    }
  }
  return errors;
}
const deepEqual = dequal;
function assignDeep(object, value) {
  if (Array.isArray(object)) {
    return object.map((o) => assignDeep(o, value));
  }
  const copy = {};
  for (const key in object) {
    copy[key] = typeof object[key] === "object" && !isNullish(object[key]) ? assignDeep(object[key], value) : value;
  }
  return copy;
}
function set(object, path, value) {
  if (new Object(object) !== object)
    return object;
  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }
  const result = path.slice(0, -1).reduce((accumulator, key, index) => new Object(accumulator[key]) === accumulator[key] ? accumulator[key] : accumulator[key] = Math.trunc(Math.abs(path[index + 1])) === +path[index + 1] ? [] : {}, object);
  result[path[path.length - 1]] = value;
  return object;
}
const util = {
  assignDeep,
  cloneDeep,
  deepEqual,
  getErrorsFromSchema,
  getValues,
  isEmpty,
  isNullish,
  set,
  subscribeOnce,
  update
};
const NO_ERROR = "";
const IS_TOUCHED = true;
function isCheckbox(element) {
  return element.getAttribute && element.getAttribute("type") === "checkbox";
}
function isFileInput(element) {
  return element.getAttribute && element.getAttribute("type") === "file";
}
function resolveValue(element) {
  if (isFileInput(element)) {
    return element.files;
  } else if (isCheckbox(element)) {
    return element.checked;
  } else {
    return element.value;
  }
}
const createForm = (config) => {
  let initialValues = config.initialValues || {};
  const validationSchema = config.validationSchema;
  const validateFunction = config.validate;
  const onSubmit = config.onSubmit;
  const getInitial = {
    values: () => util.cloneDeep(initialValues),
    errors: () => validationSchema ? util.getErrorsFromSchema(initialValues, validationSchema.fields) : util.assignDeep(initialValues, NO_ERROR),
    touched: () => util.assignDeep(initialValues, !IS_TOUCHED)
  };
  const form = (0, import_index_6a50b39d.w)(getInitial.values());
  const errors = (0, import_index_6a50b39d.w)(getInitial.errors());
  const touched = (0, import_index_6a50b39d.w)(getInitial.touched());
  const isSubmitting = (0, import_index_6a50b39d.w)(false);
  const isValidating = (0, import_index_6a50b39d.w)(false);
  const isValid = (0, import_index_6a50b39d.d)(errors, ($errors) => {
    const noErrors = util.getValues($errors).every((field) => field === NO_ERROR);
    return noErrors;
  });
  const modified = (0, import_index_6a50b39d.d)(form, ($form) => {
    const object = util.assignDeep($form, false);
    for (let key in $form) {
      object[key] = !util.deepEqual($form[key], initialValues[key]);
    }
    return object;
  });
  const isModified = (0, import_index_6a50b39d.d)(modified, ($modified) => {
    return util.getValues($modified).includes(true);
  });
  function validateField(field) {
    return util.subscribeOnce(form).then((values) => validateFieldValue(field, values[field]));
  }
  function validateFieldValue(field, value) {
    updateTouched(field, true);
    if (validationSchema) {
      isValidating.set(true);
      return validationSchema.validateAt(field, (0, import_index_0b98f2d1.h)(form)).then(() => util.update(errors, field, "")).catch((error) => util.update(errors, field, error.message)).finally(() => {
        isValidating.set(false);
      });
    }
    if (validateFunction) {
      isValidating.set(true);
      return Promise.resolve().then(() => validateFunction({ [field]: value })).then((errs) => util.update(errors, field, !util.isNullish(errs) ? errs[field] : "")).finally(() => {
        isValidating.set(false);
      });
    }
    return Promise.resolve();
  }
  function updateValidateField(field, value) {
    updateField(field, value);
    return validateFieldValue(field, value);
  }
  function handleChange(event) {
    const element = event.target;
    const field = element.name || element.id;
    const value = resolveValue(element);
    return updateValidateField(field, value);
  }
  function handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    isSubmitting.set(true);
    return util.subscribeOnce(form).then((values) => {
      if (typeof validateFunction === "function") {
        isValidating.set(true);
        return Promise.resolve().then(() => validateFunction(values)).then((error) => {
          if (util.isNullish(error) || util.getValues(error).length === 0) {
            return clearErrorsAndSubmit(values);
          } else {
            errors.set(error);
            isSubmitting.set(false);
          }
        }).finally(() => isValidating.set(false));
      }
      if (validationSchema) {
        isValidating.set(true);
        return validationSchema.validate(values, { abortEarly: false }).then(() => clearErrorsAndSubmit(values)).catch((yupErrors) => {
          if (yupErrors && yupErrors.inner) {
            const updatedErrors = getInitial.errors();
            yupErrors.inner.map((error) => util.set(updatedErrors, error.path, error.message));
            errors.set(updatedErrors);
          }
          isSubmitting.set(false);
        }).finally(() => isValidating.set(false));
      }
      return clearErrorsAndSubmit(values);
    });
  }
  function handleReset() {
    form.set(getInitial.values());
    errors.set(getInitial.errors());
    touched.set(getInitial.touched());
  }
  function clearErrorsAndSubmit(values) {
    return Promise.resolve().then(() => errors.set(getInitial.errors())).then(() => onSubmit(values, form, errors)).finally(() => isSubmitting.set(false));
  }
  function updateField(field, value) {
    util.update(form, field, value);
  }
  function updateTouched(field, value) {
    util.update(touched, field, value);
  }
  function updateInitialValues(newValues) {
    initialValues = newValues;
    handleReset();
  }
  return {
    form,
    errors,
    touched,
    modified,
    isValid,
    isSubmitting,
    isValidating,
    isModified,
    handleChange,
    handleSubmit,
    handleReset,
    updateField,
    updateValidateField,
    updateTouched,
    validateField,
    updateInitialValues,
    state: (0, import_index_6a50b39d.d)([
      form,
      errors,
      touched,
      modified,
      isValid,
      isValidating,
      isSubmitting,
      isModified
    ], ([
      $form,
      $errors,
      $touched,
      $modified,
      $isValid,
      $isValidating,
      $isSubmitting,
      $isModified
    ]) => ({
      form: $form,
      errors: $errors,
      touched: $touched,
      modified: $modified,
      isValid: $isValid,
      isSubmitting: $isSubmitting,
      isValidating: $isValidating,
      isModified: $isModified
    }))
  };
};
const formatErrors = (errors) => {
  let formattedErrors = {};
  for (const err in errors) {
    const errVal = errors[err];
    if (errVal.length > 0) {
      formattedErrors[err] = errVal[0];
    }
  }
  return formattedErrors;
};
const suiteRun = (suite, data) => {
  suite(data);
  const result = suite.get();
  if (result.isValid()) {
    return true;
  }
  return formatErrors(result.getErrors());
};
import_vest.enforce.extend({ isEmail: import_pragmatic_email_regex.default });
const emailValidation = (data) => {
  (0, import_vest.test)("email", "Email is required", () => {
    (0, import_vest.enforce)(data.email).isString().isNotEmpty();
  });
  (0, import_vest.test)("email", "Email Address is not valid", () => {
    (0, import_vest.enforce)(data.email).isEmail();
  });
};
const passwordValidation = (data) => {
  (0, import_vest.test)("password", "Password is required", () => {
    (0, import_vest.enforce)(data.password).isString().isNotEmpty();
  });
  (0, import_vest.test)("password", "Password must be at least 6 characters", () => {
    (0, import_vest.enforce)(data.password).longerThanOrEquals(6);
  });
};
const forgotPasswordSuite = import_vest.default.create((data) => {
  emailValidation(data);
});
const signInSuite = import_vest.default.create((data) => {
  emailValidation(data);
  passwordValidation(data);
});
const signUpSuite = import_vest.default.create((data) => {
  emailValidation(data);
  passwordValidation(data);
  (0, import_vest.test)("fullName", "Full Name is required", () => {
    (0, import_vest.enforce)(data.fullName).isString().isNotEmpty();
  });
});
const waitingListSuite = import_vest.default.create((data) => {
  emailValidation(data);
  (0, import_vest.test)("fullName", "Full Name is required", () => {
    (0, import_vest.enforce)(data.fullName).isString().isNotEmpty();
  });
});
const resetPasswordSuite = import_vest.default.create((data) => {
  passwordValidation(data);
  (0, import_vest.skipWhen)(!data.password, () => {
    (0, import_vest.test)("passwordConfirm", "Password does not match", () => {
      (0, import_vest.enforce)(data.passwordConfirm).equals(data.password);
    });
  });
});
const ForgotPasswordSchema = (data) => suiteRun(forgotPasswordSuite, data);
const SignInSchema = (data) => suiteRun(signInSuite, data);
const SignUpSchema = (data) => suiteRun(signUpSuite, data);
const WaitingListSchema = (data) => suiteRun(waitingListSuite, data);
const ResetPasswordSchema = (data) => suiteRun(resetPasswordSuite, data);
const Notification = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { status = "error" } = $$props;
  let { withButton = false } = $$props;
  let { showNotification = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.withButton === void 0 && $$bindings.withButton && withButton !== void 0)
    $$bindings.withButton(withButton);
  if ($$props.showNotification === void 0 && $$bindings.showNotification && showNotification !== void 0)
    $$bindings.showNotification(showNotification);
  return `${showNotification ? `<div class="${[
    "notification " + (0, import_index_0b98f2d1.e)(className, true),
    (status == "error" ? "is-danger" : "") + " " + (status == "success" ? "is-success" : "")
  ].join(" ").trim()}">${withButton ? `<button class="${"delete"}"></button>` : ``}
		${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
