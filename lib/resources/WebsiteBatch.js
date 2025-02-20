/*
 * node-crisp-api
 *
 * Copyright 2022, Crisp IM SAS
 * Author: Valerian Saliou <valerian@valeriansaliou.name>
 */


"use strict";


/**
 * Crisp WebsiteBatch Resource
 * @class
 * @classdesc This is the Crisp Website Batch Resource
 */
function WebsiteBatch(service, crisp) {
  /**
   * Batch Resolve Conversations
   * @memberof WebsiteBatch
   * @method batchResolveConversations
   * @return Promise
   */
  service.batchResolveConversations = function(websiteID, sessions) {
    return crisp.patch(
      crisp._prepareRestUrl(["website", websiteID, "batch", "resolve"]),

      null,

      {
        sessions : sessions
      }
    );
  };

  /**
   * Batch Read Conversations
   * @memberof WebsiteBatch
   * @method batchReadConversations
   * @return Promise
   */
  service.batchReadConversations = function(websiteID, sessions) {
    return crisp.patch(
      crisp._prepareRestUrl(["website", websiteID, "batch", "read"]),

      null,

      {
        sessions : sessions
      }
    );
  };

  /**
   * Batch Remove Conversations
   * @memberof WebsiteBatch
   * @method batchRemoveConversations
   * @return Promise
   */
  service.batchRemoveConversations = function(websiteID, sessions) {
    return crisp.patch(
      crisp._prepareRestUrl(["website", websiteID, "batch", "remove"]),

      null,

      {
        sessions : sessions
      }
    );
  };

  /**
   * Batch Remove People
   * @memberof WebsiteBatch
   * @method batchRemovePeople
   * @return Promise
   */
  service.batchRemovePeople = function(websiteID, people) {
    return crisp.patch(
      crisp._prepareRestUrl(["website", websiteID, "batch", "remove"]),

      null,

      {
        people : people
      }
    );
  };
}


module.exports = WebsiteBatch;
