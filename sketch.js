function setup() {
  createCanvas(windowWidth, windowHeight); // 初始化畫布大小為視窗寬高
}

function draw() {
  // 畫布背景顏色
  background(255, 203, 105);

  // 設定海草的參數
  let seaweedCount = 40; // 海草數量
  let colors = [
    color(255, 87, 51), // 鮮紅
    color(46, 204, 113), // 鮮綠
    color(52, 152, 219), // 鮮藍
    color(241, 196, 15), // 鮮黃
    color(155, 89, 182), // 鮮紫
    color(231, 76, 60), // 鮮橙紅
  ];

  // 計算每條海草的水平間距，讓它們均勻分佈
  let spacing = width / seaweedCount;

  for (let n = 0; n < seaweedCount; n++) {
    // 每條海草的固定底部 x 座標
    let baseX = n * spacing + spacing / 2; // 均勻分佈
    let baseY = height; // 固定在畫布底部
    let totalHeight = random(40, 80); // 隨機高度
    let segmentLength = 4; // 每段枝節的長度固定為 4
    let segments = totalHeight / segmentLength; // 計算節點數量
    let maxAmplitude = random(1, 3); // 隨機寬度（振幅）限制在 1~3
    let seaweedColor = random(colors); // 隨機顏色
    let seaweedThickness = random(20, 40); // 隨機粗細

    // 初始化上一個節點的座標
    let prevX = baseX;
    let prevY = baseY;

    // 設定海草顏色和粗細
    stroke(seaweedColor);
    strokeWeight(seaweedThickness);

    // 繪製每一節海草
    for (let i = 0; i < segments; i++) {
      // 計算當前節點的擺動效果
      let offsetX = sin(frameCount * 0.01 + i * 0.5 + n) * (maxAmplitude - i * 0.05); // 振幅隨節點遞減
      let currentX = prevX + offsetX; // 基於上一節點的擺動
      let currentY = prevY - segmentLength; // 每節向上移動固定距離

      // 繪製線段
      line(prevX, prevY, currentX, currentY);

      // 更新上一個節點的座標
      prevX = currentX;
      prevY = currentY;
    }
  }
}

// 當視窗大小改變時調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 動態調整畫布大小
}
