export const res = {
    HelloWorld_png : "res/HelloWorld.png",
};

export const g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

// module.exports.res = res;
// module.exports.g_resources = g_resources;