/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./image_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ImagesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ImagesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ImageQuery,
 *   !proto.ImageChunk>}
 */
const methodDescriptor_Images_PullImage = new grpc.web.MethodDescriptor(
  '/Images/PullImage',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ImageQuery,
  proto.ImageChunk,
  /**
   * @param {!proto.ImageQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ImageChunk.deserializeBinary
);


/**
 * @param {!proto.ImageQuery} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ImageChunk>}
 *     The XHR Node Readable Stream
 */
proto.ImagesClient.prototype.pullImage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Images/PullImage',
      request,
      metadata || {},
      methodDescriptor_Images_PullImage);
};


/**
 * @param {!proto.ImageQuery} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ImageChunk>}
 *     The XHR Node Readable Stream
 */
proto.ImagesPromiseClient.prototype.pullImage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Images/PullImage',
      request,
      metadata || {},
      methodDescriptor_Images_PullImage);
};


module.exports = proto;

