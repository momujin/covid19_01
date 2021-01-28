<template>
  <div class="Event">
    <h3 class="Event-heading">
      <v-icon size="24" class="Event-heading-icon">
        mdi-information
      </v-icon>
      {{ $t('中止のイベント') }}
    </h3>
    <ul class="Event-list">
      <li v-for="(item, i) in items" :key="i" class="Event-list-item">
        <p
          class="Event-list-item-anchor"
        >
          <time
            class="Event-list-item-anchor-time px-2"
          >
            {{ item.datetext }}
          </time>
          <span class="Event-list-item-anchor-link2">
            {{ item.text }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="Event-item-ExternalLinkIcon"
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
.Event {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;
}

.Event-heading {
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

.Event .Event-list {
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
