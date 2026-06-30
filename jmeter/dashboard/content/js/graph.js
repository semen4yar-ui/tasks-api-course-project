/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 1899.0, "series": [{"data": [[0.0, 180.0], [0.1, 180.0], [0.2, 180.0], [0.3, 180.0], [0.4, 180.0], [0.5, 180.0], [0.6, 180.0], [0.7, 180.0], [0.8, 180.0], [0.9, 180.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 184.0], [1.4, 184.0], [1.5, 184.0], [1.6, 184.0], [1.7, 184.0], [1.8, 184.0], [1.9, 184.0], [2.0, 185.0], [2.1, 185.0], [2.2, 185.0], [2.3, 185.0], [2.4, 185.0], [2.5, 185.0], [2.6, 185.0], [2.7, 185.0], [2.8, 185.0], [2.9, 185.0], [3.0, 188.0], [3.1, 188.0], [3.2, 188.0], [3.3, 188.0], [3.4, 188.0], [3.5, 188.0], [3.6, 188.0], [3.7, 188.0], [3.8, 188.0], [3.9, 188.0], [4.0, 189.0], [4.1, 189.0], [4.2, 189.0], [4.3, 189.0], [4.4, 189.0], [4.5, 189.0], [4.6, 189.0], [4.7, 189.0], [4.8, 189.0], [4.9, 189.0], [5.0, 193.0], [5.1, 193.0], [5.2, 193.0], [5.3, 193.0], [5.4, 193.0], [5.5, 193.0], [5.6, 193.0], [5.7, 193.0], [5.8, 193.0], [5.9, 193.0], [6.0, 201.0], [6.1, 201.0], [6.2, 201.0], [6.3, 201.0], [6.4, 201.0], [6.5, 201.0], [6.6, 201.0], [6.7, 201.0], [6.8, 201.0], [6.9, 201.0], [7.0, 204.0], [7.1, 204.0], [7.2, 204.0], [7.3, 204.0], [7.4, 204.0], [7.5, 204.0], [7.6, 204.0], [7.7, 204.0], [7.8, 204.0], [7.9, 204.0], [8.0, 204.0], [8.1, 204.0], [8.2, 204.0], [8.3, 204.0], [8.4, 204.0], [8.5, 204.0], [8.6, 204.0], [8.7, 204.0], [8.8, 204.0], [8.9, 204.0], [9.0, 208.0], [9.1, 208.0], [9.2, 208.0], [9.3, 208.0], [9.4, 208.0], [9.5, 208.0], [9.6, 208.0], [9.7, 208.0], [9.8, 208.0], [9.9, 208.0], [10.0, 209.0], [10.1, 209.0], [10.2, 209.0], [10.3, 209.0], [10.4, 209.0], [10.5, 209.0], [10.6, 209.0], [10.7, 209.0], [10.8, 209.0], [10.9, 209.0], [11.0, 213.0], [11.1, 213.0], [11.2, 213.0], [11.3, 213.0], [11.4, 213.0], [11.5, 213.0], [11.6, 213.0], [11.7, 213.0], [11.8, 213.0], [11.9, 213.0], [12.0, 216.0], [12.1, 216.0], [12.2, 216.0], [12.3, 216.0], [12.4, 216.0], [12.5, 216.0], [12.6, 216.0], [12.7, 216.0], [12.8, 216.0], [12.9, 216.0], [13.0, 216.0], [13.1, 216.0], [13.2, 216.0], [13.3, 216.0], [13.4, 216.0], [13.5, 216.0], [13.6, 216.0], [13.7, 216.0], [13.8, 216.0], [13.9, 216.0], [14.0, 216.0], [14.1, 216.0], [14.2, 216.0], [14.3, 216.0], [14.4, 216.0], [14.5, 216.0], [14.6, 216.0], [14.7, 216.0], [14.8, 216.0], [14.9, 216.0], [15.0, 220.0], [15.1, 220.0], [15.2, 220.0], [15.3, 220.0], [15.4, 220.0], [15.5, 220.0], [15.6, 220.0], [15.7, 220.0], [15.8, 220.0], [15.9, 220.0], [16.0, 220.0], [16.1, 220.0], [16.2, 220.0], [16.3, 220.0], [16.4, 220.0], [16.5, 220.0], [16.6, 220.0], [16.7, 220.0], [16.8, 220.0], [16.9, 220.0], [17.0, 222.0], [17.1, 222.0], [17.2, 222.0], [17.3, 222.0], [17.4, 222.0], [17.5, 222.0], [17.6, 222.0], [17.7, 222.0], [17.8, 222.0], [17.9, 222.0], [18.0, 228.0], [18.1, 228.0], [18.2, 228.0], [18.3, 228.0], [18.4, 228.0], [18.5, 228.0], [18.6, 228.0], [18.7, 228.0], [18.8, 228.0], [18.9, 228.0], [19.0, 230.0], [19.1, 230.0], [19.2, 230.0], [19.3, 230.0], [19.4, 230.0], [19.5, 230.0], [19.6, 230.0], [19.7, 230.0], [19.8, 230.0], [19.9, 230.0], [20.0, 230.0], [20.1, 230.0], [20.2, 230.0], [20.3, 230.0], [20.4, 230.0], [20.5, 230.0], [20.6, 230.0], [20.7, 230.0], [20.8, 230.0], [20.9, 230.0], [21.0, 231.0], [21.1, 231.0], [21.2, 231.0], [21.3, 231.0], [21.4, 231.0], [21.5, 231.0], [21.6, 231.0], [21.7, 231.0], [21.8, 231.0], [21.9, 231.0], [22.0, 231.0], [22.1, 231.0], [22.2, 231.0], [22.3, 231.0], [22.4, 231.0], [22.5, 231.0], [22.6, 231.0], [22.7, 231.0], [22.8, 231.0], [22.9, 231.0], [23.0, 232.0], [23.1, 232.0], [23.2, 232.0], [23.3, 232.0], [23.4, 232.0], [23.5, 232.0], [23.6, 232.0], [23.7, 232.0], [23.8, 232.0], [23.9, 232.0], [24.0, 234.0], [24.1, 234.0], [24.2, 234.0], [24.3, 234.0], [24.4, 234.0], [24.5, 234.0], [24.6, 234.0], [24.7, 234.0], [24.8, 234.0], [24.9, 234.0], [25.0, 234.0], [25.1, 234.0], [25.2, 234.0], [25.3, 234.0], [25.4, 234.0], [25.5, 234.0], [25.6, 234.0], [25.7, 234.0], [25.8, 234.0], [25.9, 234.0], [26.0, 235.0], [26.1, 235.0], [26.2, 235.0], [26.3, 235.0], [26.4, 235.0], [26.5, 235.0], [26.6, 235.0], [26.7, 235.0], [26.8, 235.0], [26.9, 235.0], [27.0, 235.0], [27.1, 235.0], [27.2, 235.0], [27.3, 235.0], [27.4, 235.0], [27.5, 235.0], [27.6, 235.0], [27.7, 235.0], [27.8, 235.0], [27.9, 235.0], [28.0, 238.0], [28.1, 238.0], [28.2, 238.0], [28.3, 238.0], [28.4, 238.0], [28.5, 238.0], [28.6, 238.0], [28.7, 238.0], [28.8, 238.0], [28.9, 238.0], [29.0, 239.0], [29.1, 239.0], [29.2, 239.0], [29.3, 239.0], [29.4, 239.0], [29.5, 239.0], [29.6, 239.0], [29.7, 239.0], [29.8, 239.0], [29.9, 239.0], [30.0, 240.0], [30.1, 240.0], [30.2, 240.0], [30.3, 240.0], [30.4, 240.0], [30.5, 240.0], [30.6, 240.0], [30.7, 240.0], [30.8, 240.0], [30.9, 240.0], [31.0, 241.0], [31.1, 241.0], [31.2, 241.0], [31.3, 241.0], [31.4, 241.0], [31.5, 241.0], [31.6, 241.0], [31.7, 241.0], [31.8, 241.0], [31.9, 241.0], [32.0, 242.0], [32.1, 242.0], [32.2, 242.0], [32.3, 242.0], [32.4, 242.0], [32.5, 242.0], [32.6, 242.0], [32.7, 242.0], [32.8, 242.0], [32.9, 242.0], [33.0, 243.0], [33.1, 243.0], [33.2, 243.0], [33.3, 243.0], [33.4, 243.0], [33.5, 243.0], [33.6, 243.0], [33.7, 243.0], [33.8, 243.0], [33.9, 243.0], [34.0, 243.0], [34.1, 243.0], [34.2, 243.0], [34.3, 243.0], [34.4, 243.0], [34.5, 243.0], [34.6, 243.0], [34.7, 243.0], [34.8, 243.0], [34.9, 243.0], [35.0, 243.0], [35.1, 243.0], [35.2, 243.0], [35.3, 243.0], [35.4, 243.0], [35.5, 243.0], [35.6, 243.0], [35.7, 243.0], [35.8, 243.0], [35.9, 243.0], [36.0, 244.0], [36.1, 244.0], [36.2, 244.0], [36.3, 244.0], [36.4, 244.0], [36.5, 244.0], [36.6, 244.0], [36.7, 244.0], [36.8, 244.0], [36.9, 244.0], [37.0, 244.0], [37.1, 244.0], [37.2, 244.0], [37.3, 244.0], [37.4, 244.0], [37.5, 244.0], [37.6, 244.0], [37.7, 244.0], [37.8, 244.0], [37.9, 244.0], [38.0, 244.0], [38.1, 244.0], [38.2, 244.0], [38.3, 244.0], [38.4, 244.0], [38.5, 244.0], [38.6, 244.0], [38.7, 244.0], [38.8, 244.0], [38.9, 244.0], [39.0, 247.0], [39.1, 247.0], [39.2, 247.0], [39.3, 247.0], [39.4, 247.0], [39.5, 247.0], [39.6, 247.0], [39.7, 247.0], [39.8, 247.0], [39.9, 247.0], [40.0, 247.0], [40.1, 247.0], [40.2, 247.0], [40.3, 247.0], [40.4, 247.0], [40.5, 247.0], [40.6, 247.0], [40.7, 247.0], [40.8, 247.0], [40.9, 247.0], [41.0, 251.0], [41.1, 251.0], [41.2, 251.0], [41.3, 251.0], [41.4, 251.0], [41.5, 251.0], [41.6, 251.0], [41.7, 251.0], [41.8, 251.0], [41.9, 251.0], [42.0, 253.0], [42.1, 253.0], [42.2, 253.0], [42.3, 253.0], [42.4, 253.0], [42.5, 253.0], [42.6, 253.0], [42.7, 253.0], [42.8, 253.0], [42.9, 253.0], [43.0, 254.0], [43.1, 254.0], [43.2, 254.0], [43.3, 254.0], [43.4, 254.0], [43.5, 254.0], [43.6, 254.0], [43.7, 254.0], [43.8, 254.0], [43.9, 254.0], [44.0, 257.0], [44.1, 257.0], [44.2, 257.0], [44.3, 257.0], [44.4, 257.0], [44.5, 257.0], [44.6, 257.0], [44.7, 257.0], [44.8, 257.0], [44.9, 257.0], [45.0, 260.0], [45.1, 260.0], [45.2, 260.0], [45.3, 260.0], [45.4, 260.0], [45.5, 260.0], [45.6, 260.0], [45.7, 260.0], [45.8, 260.0], [45.9, 260.0], [46.0, 262.0], [46.1, 262.0], [46.2, 262.0], [46.3, 262.0], [46.4, 262.0], [46.5, 262.0], [46.6, 262.0], [46.7, 262.0], [46.8, 262.0], [46.9, 262.0], [47.0, 269.0], [47.1, 269.0], [47.2, 269.0], [47.3, 269.0], [47.4, 269.0], [47.5, 269.0], [47.6, 269.0], [47.7, 269.0], [47.8, 269.0], [47.9, 269.0], [48.0, 271.0], [48.1, 271.0], [48.2, 271.0], [48.3, 271.0], [48.4, 271.0], [48.5, 271.0], [48.6, 271.0], [48.7, 271.0], [48.8, 271.0], [48.9, 271.0], [49.0, 277.0], [49.1, 277.0], [49.2, 277.0], [49.3, 277.0], [49.4, 277.0], [49.5, 277.0], [49.6, 277.0], [49.7, 277.0], [49.8, 277.0], [49.9, 277.0], [50.0, 277.0], [50.1, 277.0], [50.2, 277.0], [50.3, 277.0], [50.4, 277.0], [50.5, 277.0], [50.6, 277.0], [50.7, 277.0], [50.8, 277.0], [50.9, 277.0], [51.0, 280.0], [51.1, 280.0], [51.2, 280.0], [51.3, 280.0], [51.4, 280.0], [51.5, 280.0], [51.6, 280.0], [51.7, 280.0], [51.8, 280.0], [51.9, 280.0], [52.0, 282.0], [52.1, 282.0], [52.2, 282.0], [52.3, 282.0], [52.4, 282.0], [52.5, 282.0], [52.6, 282.0], [52.7, 282.0], [52.8, 282.0], [52.9, 282.0], [53.0, 283.0], [53.1, 283.0], [53.2, 283.0], [53.3, 283.0], [53.4, 283.0], [53.5, 283.0], [53.6, 283.0], [53.7, 283.0], [53.8, 283.0], [53.9, 283.0], [54.0, 288.0], [54.1, 288.0], [54.2, 288.0], [54.3, 288.0], [54.4, 288.0], [54.5, 288.0], [54.6, 288.0], [54.7, 288.0], [54.8, 288.0], [54.9, 288.0], [55.0, 288.0], [55.1, 288.0], [55.2, 288.0], [55.3, 288.0], [55.4, 288.0], [55.5, 288.0], [55.6, 288.0], [55.7, 288.0], [55.8, 288.0], [55.9, 288.0], [56.0, 290.0], [56.1, 290.0], [56.2, 290.0], [56.3, 290.0], [56.4, 290.0], [56.5, 290.0], [56.6, 290.0], [56.7, 290.0], [56.8, 290.0], [56.9, 290.0], [57.0, 301.0], [57.1, 301.0], [57.2, 301.0], [57.3, 301.0], [57.4, 301.0], [57.5, 301.0], [57.6, 301.0], [57.7, 301.0], [57.8, 301.0], [57.9, 301.0], [58.0, 302.0], [58.1, 302.0], [58.2, 302.0], [58.3, 302.0], [58.4, 302.0], [58.5, 302.0], [58.6, 302.0], [58.7, 302.0], [58.8, 302.0], [58.9, 302.0], [59.0, 302.0], [59.1, 302.0], [59.2, 302.0], [59.3, 302.0], [59.4, 302.0], [59.5, 302.0], [59.6, 302.0], [59.7, 302.0], [59.8, 302.0], [59.9, 302.0], [60.0, 307.0], [60.1, 307.0], [60.2, 307.0], [60.3, 307.0], [60.4, 307.0], [60.5, 307.0], [60.6, 307.0], [60.7, 307.0], [60.8, 307.0], [60.9, 307.0], [61.0, 313.0], [61.1, 313.0], [61.2, 313.0], [61.3, 313.0], [61.4, 313.0], [61.5, 313.0], [61.6, 313.0], [61.7, 313.0], [61.8, 313.0], [61.9, 313.0], [62.0, 318.0], [62.1, 318.0], [62.2, 318.0], [62.3, 318.0], [62.4, 318.0], [62.5, 318.0], [62.6, 318.0], [62.7, 318.0], [62.8, 318.0], [62.9, 318.0], [63.0, 319.0], [63.1, 319.0], [63.2, 319.0], [63.3, 319.0], [63.4, 319.0], [63.5, 319.0], [63.6, 319.0], [63.7, 319.0], [63.8, 319.0], [63.9, 319.0], [64.0, 363.0], [64.1, 363.0], [64.2, 363.0], [64.3, 363.0], [64.4, 363.0], [64.5, 363.0], [64.6, 363.0], [64.7, 363.0], [64.8, 363.0], [64.9, 363.0], [65.0, 371.0], [65.1, 371.0], [65.2, 371.0], [65.3, 371.0], [65.4, 371.0], [65.5, 371.0], [65.6, 371.0], [65.7, 371.0], [65.8, 371.0], [65.9, 371.0], [66.0, 383.0], [66.1, 383.0], [66.2, 383.0], [66.3, 383.0], [66.4, 383.0], [66.5, 383.0], [66.6, 383.0], [66.7, 383.0], [66.8, 383.0], [66.9, 383.0], [67.0, 384.0], [67.1, 384.0], [67.2, 384.0], [67.3, 384.0], [67.4, 384.0], [67.5, 384.0], [67.6, 384.0], [67.7, 384.0], [67.8, 384.0], [67.9, 384.0], [68.0, 386.0], [68.1, 386.0], [68.2, 386.0], [68.3, 386.0], [68.4, 386.0], [68.5, 386.0], [68.6, 386.0], [68.7, 386.0], [68.8, 386.0], [68.9, 386.0], [69.0, 388.0], [69.1, 388.0], [69.2, 388.0], [69.3, 388.0], [69.4, 388.0], [69.5, 388.0], [69.6, 388.0], [69.7, 388.0], [69.8, 388.0], [69.9, 388.0], [70.0, 389.0], [70.1, 389.0], [70.2, 389.0], [70.3, 389.0], [70.4, 389.0], [70.5, 389.0], [70.6, 389.0], [70.7, 389.0], [70.8, 389.0], [70.9, 389.0], [71.0, 391.0], [71.1, 391.0], [71.2, 391.0], [71.3, 391.0], [71.4, 391.0], [71.5, 391.0], [71.6, 391.0], [71.7, 391.0], [71.8, 391.0], [71.9, 391.0], [72.0, 400.0], [72.1, 400.0], [72.2, 400.0], [72.3, 400.0], [72.4, 400.0], [72.5, 400.0], [72.6, 400.0], [72.7, 400.0], [72.8, 400.0], [72.9, 400.0], [73.0, 409.0], [73.1, 409.0], [73.2, 409.0], [73.3, 409.0], [73.4, 409.0], [73.5, 409.0], [73.6, 409.0], [73.7, 409.0], [73.8, 409.0], [73.9, 409.0], [74.0, 422.0], [74.1, 422.0], [74.2, 422.0], [74.3, 422.0], [74.4, 422.0], [74.5, 422.0], [74.6, 422.0], [74.7, 422.0], [74.8, 422.0], [74.9, 422.0], [75.0, 428.0], [75.1, 428.0], [75.2, 428.0], [75.3, 428.0], [75.4, 428.0], [75.5, 428.0], [75.6, 428.0], [75.7, 428.0], [75.8, 428.0], [75.9, 428.0], [76.0, 444.0], [76.1, 444.0], [76.2, 444.0], [76.3, 444.0], [76.4, 444.0], [76.5, 444.0], [76.6, 444.0], [76.7, 444.0], [76.8, 444.0], [76.9, 444.0], [77.0, 448.0], [77.1, 448.0], [77.2, 448.0], [77.3, 448.0], [77.4, 448.0], [77.5, 448.0], [77.6, 448.0], [77.7, 448.0], [77.8, 448.0], [77.9, 448.0], [78.0, 456.0], [78.1, 456.0], [78.2, 456.0], [78.3, 456.0], [78.4, 456.0], [78.5, 456.0], [78.6, 456.0], [78.7, 456.0], [78.8, 456.0], [78.9, 456.0], [79.0, 470.0], [79.1, 470.0], [79.2, 470.0], [79.3, 470.0], [79.4, 470.0], [79.5, 470.0], [79.6, 470.0], [79.7, 470.0], [79.8, 470.0], [79.9, 470.0], [80.0, 497.0], [80.1, 497.0], [80.2, 497.0], [80.3, 497.0], [80.4, 497.0], [80.5, 497.0], [80.6, 497.0], [80.7, 497.0], [80.8, 497.0], [80.9, 497.0], [81.0, 503.0], [81.1, 503.0], [81.2, 503.0], [81.3, 503.0], [81.4, 503.0], [81.5, 503.0], [81.6, 503.0], [81.7, 503.0], [81.8, 503.0], [81.9, 503.0], [82.0, 513.0], [82.1, 513.0], [82.2, 513.0], [82.3, 513.0], [82.4, 513.0], [82.5, 513.0], [82.6, 513.0], [82.7, 513.0], [82.8, 513.0], [82.9, 513.0], [83.0, 525.0], [83.1, 525.0], [83.2, 525.0], [83.3, 525.0], [83.4, 525.0], [83.5, 525.0], [83.6, 525.0], [83.7, 525.0], [83.8, 525.0], [83.9, 525.0], [84.0, 529.0], [84.1, 529.0], [84.2, 529.0], [84.3, 529.0], [84.4, 529.0], [84.5, 529.0], [84.6, 529.0], [84.7, 529.0], [84.8, 529.0], [84.9, 529.0], [85.0, 533.0], [85.1, 533.0], [85.2, 533.0], [85.3, 533.0], [85.4, 533.0], [85.5, 533.0], [85.6, 533.0], [85.7, 533.0], [85.8, 533.0], [85.9, 533.0], [86.0, 535.0], [86.1, 535.0], [86.2, 535.0], [86.3, 535.0], [86.4, 535.0], [86.5, 535.0], [86.6, 535.0], [86.7, 535.0], [86.8, 535.0], [86.9, 535.0], [87.0, 537.0], [87.1, 537.0], [87.2, 537.0], [87.3, 537.0], [87.4, 537.0], [87.5, 537.0], [87.6, 537.0], [87.7, 537.0], [87.8, 537.0], [87.9, 537.0], [88.0, 544.0], [88.1, 544.0], [88.2, 544.0], [88.3, 544.0], [88.4, 544.0], [88.5, 544.0], [88.6, 544.0], [88.7, 544.0], [88.8, 544.0], [88.9, 544.0], [89.0, 548.0], [89.1, 548.0], [89.2, 548.0], [89.3, 548.0], [89.4, 548.0], [89.5, 548.0], [89.6, 548.0], [89.7, 548.0], [89.8, 548.0], [89.9, 548.0], [90.0, 614.0], [90.1, 614.0], [90.2, 614.0], [90.3, 614.0], [90.4, 614.0], [90.5, 614.0], [90.6, 614.0], [90.7, 614.0], [90.8, 614.0], [90.9, 614.0], [91.0, 688.0], [91.1, 688.0], [91.2, 688.0], [91.3, 688.0], [91.4, 688.0], [91.5, 688.0], [91.6, 688.0], [91.7, 688.0], [91.8, 688.0], [91.9, 688.0], [92.0, 762.0], [92.1, 762.0], [92.2, 762.0], [92.3, 762.0], [92.4, 762.0], [92.5, 762.0], [92.6, 762.0], [92.7, 762.0], [92.8, 762.0], [92.9, 762.0], [93.0, 912.0], [93.1, 912.0], [93.2, 912.0], [93.3, 912.0], [93.4, 912.0], [93.5, 912.0], [93.6, 912.0], [93.7, 912.0], [93.8, 912.0], [93.9, 912.0], [94.0, 956.0], [94.1, 956.0], [94.2, 956.0], [94.3, 956.0], [94.4, 956.0], [94.5, 956.0], [94.6, 956.0], [94.7, 956.0], [94.8, 956.0], [94.9, 956.0], [95.0, 1037.0], [95.1, 1037.0], [95.2, 1037.0], [95.3, 1037.0], [95.4, 1037.0], [95.5, 1037.0], [95.6, 1037.0], [95.7, 1037.0], [95.8, 1037.0], [95.9, 1037.0], [96.0, 1176.0], [96.1, 1176.0], [96.2, 1176.0], [96.3, 1176.0], [96.4, 1176.0], [96.5, 1176.0], [96.6, 1176.0], [96.7, 1176.0], [96.8, 1176.0], [96.9, 1176.0], [97.0, 1315.0], [97.1, 1315.0], [97.2, 1315.0], [97.3, 1315.0], [97.4, 1315.0], [97.5, 1315.0], [97.6, 1315.0], [97.7, 1315.0], [97.8, 1315.0], [97.9, 1315.0], [98.0, 1552.0], [98.1, 1552.0], [98.2, 1552.0], [98.3, 1552.0], [98.4, 1552.0], [98.5, 1552.0], [98.6, 1552.0], [98.7, 1552.0], [98.8, 1552.0], [98.9, 1552.0], [99.0, 1899.0], [99.1, 1899.0], [99.2, 1899.0], [99.3, 1899.0], [99.4, 1899.0], [99.5, 1899.0], [99.6, 1899.0], [99.7, 1899.0], [99.8, 1899.0], [99.9, 1899.0]], "isOverall": false, "label": "Get Task", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 51.0, "series": [{"data": [[600.0, 2.0], [700.0, 1.0], [200.0, 51.0], [900.0, 2.0], [1000.0, 1.0], [1100.0, 1.0], [300.0, 15.0], [1300.0, 1.0], [1500.0, 1.0], [400.0, 9.0], [100.0, 6.0], [1800.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "Get Task", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 81.0, "series": [{"data": [[0.0, 81.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 17.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.6199999999999988, "minX": 1.78283046E12, "maxY": 3.6199999999999988, "series": [{"data": [[1.78283046E12, 3.6199999999999988]], "isOverall": false, "label": "ClickUp Performance Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78283046E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 326.4651162790697, "minX": 1.0, "maxY": 466.45000000000005, "series": [{"data": [[2.0, 400.99999999999994], [4.0, 326.4651162790697], [1.0, 432.8], [5.0, 466.45000000000005], [3.0, 400.5714285714285]], "isOverall": false, "label": "Get Task", "isController": false}, {"data": [[3.6199999999999988, 383.54]], "isOverall": false, "label": "Get Task-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 388.3333333333333, "minX": 1.78283046E12, "maxY": 5108.216666666666, "series": [{"data": [[1.78283046E12, 5108.216666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78283046E12, 388.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78283046E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 383.54, "minX": 1.78283046E12, "maxY": 383.54, "series": [{"data": [[1.78283046E12, 383.54]], "isOverall": false, "label": "Get Task", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78283046E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 383.40000000000003, "minX": 1.78283046E12, "maxY": 383.40000000000003, "series": [{"data": [[1.78283046E12, 383.40000000000003]], "isOverall": false, "label": "Get Task", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78283046E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 8.100000000000003, "minX": 1.78283046E12, "maxY": 8.100000000000003, "series": [{"data": [[1.78283046E12, 8.100000000000003]], "isOverall": false, "label": "Get Task", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78283046E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 180.0, "minX": 1.78283046E12, "maxY": 1899.0, "series": [{"data": [[1.78283046E12, 1899.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78283046E12, 180.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78283046E12, 607.4000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78283046E12, 1895.5299999999982]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78283046E12, 277.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78283046E12, 1032.9499999999991]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78283046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 243.0, "minX": 1.0, "maxY": 475.5, "series": [{"data": [[4.0, 277.0], [8.0, 394.0], [1.0, 288.0], [2.0, 475.5], [10.0, 243.0], [11.0, 280.0], [6.0, 339.0], [12.0, 243.5], [13.0, 277.0], [7.0, 302.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 243.0, "minX": 1.0, "maxY": 475.5, "series": [{"data": [[4.0, 275.0], [8.0, 394.0], [1.0, 288.0], [2.0, 475.5], [10.0, 243.0], [11.0, 280.0], [6.0, 339.0], [12.0, 243.5], [13.0, 277.0], [7.0, 302.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78283046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.78283046E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78283046E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78283046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.78283046E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78283046E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78283046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.78283046E12, 1.6666666666666667]], "isOverall": false, "label": "Get Task-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78283046E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78283046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.78283046E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78283046E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

