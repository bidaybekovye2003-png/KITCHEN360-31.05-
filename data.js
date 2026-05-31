var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen1",
      "name": "KITCHEN1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2926962084295148,
          "pitch": 0.5829910742123978,
          "rotation": 0,
          "target": "1-kitchen2"
        },
        {
          "yaw": -0.5388658676062352,
          "pitch": 0.24456002271433164,
          "rotation": 0,
          "target": "2-kitchen3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen2",
      "name": "KITCHEN2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.012490413513568,
          "pitch": 0.6652062021045086,
          "rotation": 0,
          "target": "0-kitchen1"
        },
        {
          "yaw": -0.13046585902954355,
          "pitch": 0.4008453871229225,
          "rotation": 0,
          "target": "2-kitchen3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen3",
      "name": "KITCHEN3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2879016173353932,
          "pitch": 0.29548915220082606,
          "rotation": 0,
          "target": "1-kitchen2"
        },
        {
          "yaw": 0.31143477707665745,
          "pitch": 0.2324405206703446,
          "rotation": 0,
          "target": "0-kitchen1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
