/**
 * Nuxt middleware hook to redirect from / to /portal (or whatever we set in nuxt.config.js router.base)
 *
 * Should be the same version as connect
 * {@link node_modules/connect/package.json}
 */
import parseurl from 'parseurl'

/**
 * Connect middleware to handle redirecting to desired Web Applicatin Context Root.
 *
 * Notice that Nuxt docs lacks explaning how to use hooks.
 * This is a sample router to help explain.
 *
 * See nice implementation for inspiration:
 * - https://github.com/nuxt/nuxt.js/blob/dev/examples/with-cookies/plugins/cookies.js
 * - https://github.com/yyx990803/launch-editor/blob/master/packages/launch-editor-middleware/index.js
 *
 * [http_class_http_clientrequest]: https://nodejs.org/api/http.html#http_class_http_clientrequest
 * [http_class_http_serverresponse]: https://nodejs.org/api/http.html#http_class_http_serverresponse
 *
 * @param {http.ClientRequest} req Node.js internal client request object [http_class_http_clientrequest]
 * @param {http.ServerResponse} res Node.js internal response [http_class_http_serverresponse]
 * @param {Function} next middleware callback
 */
export default desiredContextRoot =>
  function projectHooksRouteRedirectPortal(req, res, next) {
    const desiredContextRootRegExp = new RegExp(`^${desiredContextRoot}`)
    const _parsedUrl = Reflect.has(req, '_parsedUrl') ? req._parsedUrl : null
    const url = _parsedUrl !== null ? _parsedUrl : parseurl(req)
    const startsWithDesired = desiredContextRootRegExp.test(url.pathname)
    const isNotProperContextRoot = desiredContextRoot !== url.pathname
    if (isNotProperContextRoot && startsWithDesired === false) {
      const pathname = url.pathname === null ? '' : url.pathname
      const search = url.search === null ? '' : url.search
      const Location = desiredContextRoot + pathname + search
      res.writeHead(302, {
        Location
      })
      res.end()
    }
    next()
  }