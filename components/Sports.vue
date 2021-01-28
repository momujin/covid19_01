<template>
  <div class="Sports">
    <h3 class="Sports-heading">
      <v-icon size="24" class="Sports-heading-icon">
        mdi-information
      </v-icon>
      {{ $t('スポーツのイベント中止・延期') }}
    </h3>
    <ul class="Sports-list">
      <li v-for="(item, i) in items" :key="i" class="Sports-list-item">
        <p
          class="Sports-list-item-anchor"
        >
          <time
            class="Sports-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ item.datetext }}
          </time>
          <span class="Sports-list-item-anchor-link2">
            {{ item.text }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="Sports-item-ExternalLinkIcon"
              size="12"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </p>
      </li>
    </ul>
    <p class="annotation" style="font-size:12px; margin-top:10px;">※主なイベントを掲載しています。このほかにも中止のものがありますので、詳しくは主催者にお問い合わせください。</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDateToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    }
  }
})
</script>

<style lang="scss">
.Sports {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;
}

.Sports-heading {
  display: flex;
  align-items: center;

  @include card-h2();

  margin-bottom: 12px;
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }
}

.Sports .Sports-list {
  padding-left: 0;
  list-style-type: none;

  &-item {
    &-anchor {
      display: inline-flex;
      width: 100%;
      text-decoration: none;
      margin: 5px;
      font-size: 14px;

      @include lessThan($medium) {
        display: flex;
        flex-wrap: wrap;
      }

      &-time {
        flex: 0 0 18%;

        @include lessThan($medium) {
          flex: 0 0 100%;
        }

        color: $gray-1;
      }

      &-link2 {
        flex: 0 1 auto;

        @include lessThan($medium) {
          padding-left: 8px;
        }

        @include lessThan($small) {
          padding-left: 8px;
        }

        color: $gray-1 !important;
      }

      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $gray-3 !important;
      }
    }
  }
}
</style>
