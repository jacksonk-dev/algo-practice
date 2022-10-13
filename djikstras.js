let graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
[4, 0, 8, 0, 0, 0, 0, 11, 0],
[0, 8, 0, 7, 0, 4, 0, 0, 2],
[0, 0, 7, 0, 9, 14, 0, 0, 0],
[0, 0, 0, 9, 0, 10, 0, 0, 0],
[0, 0, 4, 14, 10, 0, 2, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 1, 6],
[8, 11, 0, 0, 0, 0, 1, 0, 7],
[0, 0, 2, 0, 0, 0, 6, 7, 0]]


const v = 9;

function djikStra(graph, source) {
  const distance = {};
  const visited = {};
  for (let i = 0; i < v; i++) {
    distance[i] = Infinity;
  }

  distance[source] = 0;
  visited[source] = true;

  let currentNode = source;

  while (currentNode !== null) {
    for (let i = 0; i < v; i++) {
      if (visited[i]) continue; //No need to update visited nodes
      if (graph[currentNode][i] === 0) continue; // Not connected to current node

      const distCurrentNodeToI = distance[currentNode] + graph[currentNode][i];

      if (distCurrentNodeToI < distance[i]) {
        distance[i] = distCurrentNodeToI;
      }
    }

    currentNode = null;
    let minDistance = Infinity;
    Object.entries(distance).forEach(([node, dist]) => {
      if (dist < minDistance && !visited[node]) {
        minDistance = dist;
        currentNode = node;
      }
    })

    if (currentNode !== null) {
      visited[currentNode] = true;
    }
  }

  console.log(distance);
  return distance;
}

djikStra(graph, 0);
