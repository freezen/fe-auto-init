<script>
import api from '@api/material/common';
import FormRow from '@components/formRow';
import Detail from '../components/wrapper/detail.vue';
import Template<component name>Detail from './templateDetail.vue';
import Create<component name>Material from './create.vue';

export default {
  name: 'detail-<component name>',
  data() {
    return {
      detail: {},
      templateContent: null
    };
  },
  computed: {
    getParams() {
      
    },
    getTemplateParams() {
      
    }
  },
  methods: {
    onDetailLoaded(detail) {
      
    },
    load1v1TemplateDetail(templateId) {
      
    }
  },
  render(h) {
    const slotRender = (items) => {
      return [
        ...items,
        <FormRow label="模板编号：" className="community-template">
          <span style="font-size: 12px; color: rgba(0,0,0,0.7)">
            {this.detail?.channelConfig?.templateNo}
          </span>
        </FormRow>,
        <FormRow label="模板详情：" className="community-template">
          <span style="font-size: 12px; color: rgba(0,0,0,0.7)">
            {this.detail?.channelConfig?.templateName}
          </span>
        </FormRow>,
        <FormRow label="" className="community-template">
          <Template<component name>Detail
            content={this.templateContent}
            params={this.getParams}
            originTemplateParams={this.getTemplateParams}
            disabled={true}
          />
        </FormRow>
      ];
    };

    return (
      <Detail
        channel="<component name>"
        templateContent={this.templateContent}
        slotRender={slotRender}
        onDetailLoaded={this.onDetailLoaded}
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
.community-template {
  /deep/.material-form-label {
    align-self: baseline;
    position: relative;
    top: 1px;
  }

  /deep/.community-content {
    padding: 0;

    &:last-child {
      margin-bottom: 0;
      .community-content-block {
        border: 0;
        margin-bottom: 0;
      }
    }
  }
}
</style>
