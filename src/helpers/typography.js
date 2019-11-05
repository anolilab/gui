import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import github from "typography-theme-github"

github.plugins = [
  new CodePlugin()
];

const typography = new Typography(github);

export default typography
