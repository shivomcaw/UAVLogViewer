<template>
    <div class="date-selector">
        <a class="centered-section">Date Range</a>
        <div class="date-inputs">
            <div class="date-field">
                <label>Start Date</label>
                <input type="datetime-local" v-model="startDateTime" @change="handleDateChange" :disabled="loading">
            </div>
            <div class="date-field">
                <label>End Date</label>
                <input type="datetime-local" v-model="endDateTime" @change="handleDateChange" :disabled="loading">
            </div>
        </div>
        <div v-if="loading" class="loading-text">Loading...</div>
    </div>
</template>

<script>
import { dateService } from '@/libs/dateService'

export default {
    name: 'DateSelector',
    data () {
        return {
            startDateTime: '',
            endDateTime: '',
            loading: false
        }
    },
    async created () {
        this.loading = true
        try {
            const { startDate, endDate } = await dateService.fetchDateRange()
            this.startDateTime = this.formatDateTime(startDate)
            this.endDateTime = this.formatDateTime(endDate)
        } catch (error) {
            console.error('Failed to fetch date range:', error)
        }
        this.loading = false
    },
    methods: {
        formatDateTime (date) {
            return new Date(date).toISOString().slice(0, 16)
        },
        handleDateChange () {
            this.$emit('dates-changed', {
                startDate: new Date(this.startDateTime),
                endDate: new Date(this.endDateTime)
            })
        }
    }
}
</script>

<style scoped>
.date-selector {
    padding: 15px;
    color: #ffffff;
}

.centered-section {
    display: block;
    text-align: left;
    padding: 5px 15px;
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 10px;
}

.date-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 15px;
}

.date-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.date-field label {
    font-size: 12px;
    color: #928f8f;
}

.date-field input {
    background: rgba(47, 60, 83, 0.63);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    font-size: 13px;
}

.date-field input::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.5;
    cursor: pointer;
}

.date-field input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
}

.loading-text {
    margin-top: 10px;
    font-size: 12px;
    color: #928f8f;
    text-align: center;
}
</style>
