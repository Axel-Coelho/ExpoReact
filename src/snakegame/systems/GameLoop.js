import React, { Component } from "react";
import Constants from '../constants/constants';

const GameLoop = (entities, { touches, dispatch, events }) => {
    let head = entities.head;
    let food = entities.food;
    let tail = entities.tail;

    head.nextMove -= 1;
    if (head.nextMove === 0) {
        head.nextMove = head.updateFrequency;
        if (
            head.position[0] + head.xspeed < 0 ||
            head.position[0] + head.xspeed >= Constants.GRID_SIZE ||
            head.position[1] + head.yspeed < 0 ||
            head.position[1] + head.yspeed >= Constants.GRID_SIZE
        ) {
            // snake hits the wall
            dispatch({ type: "game-over" })
        } else {
            // snake moves
            head.position[0] += head.xspeed;
            head.position[1] += head.yspeed;
        }
    }

    return entities;
};

export { GameLoop };