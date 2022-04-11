#version 460

layout (location = 0) out vec4 color;

layout (location = 0) in vec3 world_pos;

void main() {
    vec3 normal = normalize(cross(dFdx(world_pos), dFdy(world_pos)));

    vec3 shaded = vec3(0.0);
    
    shaded += max( normal.x, 0.0) * vec3(0.8, 0.3, 0.1);
    shaded += max(-normal.x, 0.0) * vec3(0.1, 0.3, 0.8);
    shaded += max( normal.y, 0.0) * vec3(0.7, 0.7, 0.7);
    shaded += max(-normal.y, 0.0) * vec3(10.0, 10.0, 10.0);

    vec3 c = vec3(0.7 / 3.1415926);
    c *= shaded;
    c = c / (1.0 + c);
    c = pow(c, vec3(1.0 / 2.2));

    color = vec4(c, 1.0);
}
