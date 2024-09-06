<script>
import Create<component name>Material from './create.vue';
import Wrapper from '../components/wrapper';
import columnSetting from '../mixins/columnSetting';

const channel = '<component name>';

export default {
  name: '<component name>',
  mixins: [columnSetting({ channel })],
  render(h) {
    return (
      <Wrapper
        id="<component name>"
        channel={channel}
        columns={this.customColumnsData}
        allColumnsData={this.allColumnsData}
        selectedKeys={this.selectedKeys}
        preSelectedKeys={this.preSelectedKeys}
        onHandleChangeTableHeader={this.handleChangeTableHeader}
        onRefreshCustomTableHeader={this.getCustomTableHeader}
        {...{
          scopedSlots: {
            create: ({ props, on }) => <Create<component name>Material {...{ props, on }} />
          }
        }}
      />
    );
  }
};
</script>

<style lang="less" scoped>
.mini-subscribe {
  padding: 20px 24px;
  background: white;
  height: 100%;
  overflow: auto;
}
</style>
