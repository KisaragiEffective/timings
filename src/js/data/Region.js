/*
 * Copyright (c) (2017) - Aikar's Minecraft Timings Parser
 *
 *  Written by Aikar <aikar@aikar.co>
 *    + Contributors (See AUTHORS)
 *
 *  http://aikar.co
 *  http://starlis.com
 *
 *  @license MIT
 *
 */

import {JsonObjectBase} from "jsonobject";

export default class Region extends JsonObjectBase {

  /**
   * @type string
   */
  regionId;

  /**
   * @type World
   */
  world;

  chunkCount;
  areaLocX;
  areaLocZ;

  /**
   * @type int[]
   */
  tileEntities;

  /**
   * @type int[]
   */
  entities;

}
