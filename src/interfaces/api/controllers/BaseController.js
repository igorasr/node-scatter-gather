import httpCodes from "../../../shared/enums/HttpCodes.js";

class BaseController {
    constructor({ service, validator }) {
        this.service = service;
        this.validator = validator;
    }

    jsonResponse(res, httpCode, data) {
        return res.status(httpCode).json(data);
    }

    ok(res, DTO = {}) {
        return res.status(httpCodes.OK).json({success: true, ...DTO});
    }

    clientError(res, message) {
        return this.jsonResponse(res, httpCodes.BAD_REQUEST, {success: false, ...message});
    }

    fail(res, error) {
        return this.jsonResponse(res, httpCodes.INTERNAL_SERVER_ERROR, {success: false, ...error});
    }
}

export default BaseController;
