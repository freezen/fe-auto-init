<script>
import CreateMaterial from '../components/createMaterial';
import cloneDeep from 'lodash/cloneDeep';
import api from '@api/material/common';
import Template<component name> from './template.vue';
import createMinxin from '../mixins/create.js';

export default {
  name: 'create-<component name>',
  mixins: [createMinxin],
  emits: ['save'],
  data() {
    return {
      channel: '<component name>',
      warningParamList: [],
      materialParams: [],
      currentAction: null
    };
  },
  computed: {
    operate() {
      return this.mode === 'create' ? '创建' : this.mode === 'copy' ? '复制' : '修改';
    }
  },
  methods: {
    handleConfirmSave(saveData, force = false) {
    },
    handleCreateMaterial(saveData) {
      
    }
  },
  render(h) {
    const slotRender = (items) => {
      return [
        ...items,
        <Template<component name>
          ref="template<component name>"
          unvalidated={this.$refs.createMaterial?.unvalidated}
          defaultTemplateConfig={this.detail?.channelConfig}
          paramOptions={this.materialParams}
          warningParamList={this.warningParamList}
        />
      ];
    };

    const extraValidate = () => {
      return this.$refs.template<component name>.verifyTemplate();
    };

    return (
      <CreateMaterial
        ref="createMaterial"
        mode={this.mode}
        onSaveDataChange={this.onSaveDataChange}
        detail={this.detail}
        slotRender={slotRender}
        channel={this.channel}
        extraValidate={extraValidate}
        visible={this.visible}
        handleCloseDrawer={this.handleCloseDrawer}
        handleCreateMaterial={this.handleCreateMaterial}
      />
    );
  }
};
</script>
<style lang="less">
.params-row {
  .smk-form-label {
    width: 120px;
    white-space: initial;
  }
}
</style>
