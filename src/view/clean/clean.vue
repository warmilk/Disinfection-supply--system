<template>
	<section>
		<!-- 新增记录弹窗 -->
		<el-dialog title="新增清洗记录" :visible.sync="dialogFormVisible">
			<el-form ref="form" :model="form" label-width="80px">
				<el-row>
					<el-form-item label="交接科室">
						<el-input v-model="form.room"></el-input>
					</el-form-item>
					<el-form-item label="条码号">
						<el-input v-model="form.codeNum"></el-input>
					</el-form-item>
					<el-form-item label="循环次数">
						<el-input-number v-model="form.forCount" @change="handleChange" :min="1" :max="10"></el-input-number>
					</el-form-item>
					<el-form-item label="包名称">
						<el-input v-model="form.package.name"></el-input>
					</el-form-item>
					<el-form-item label="包编号">
						<el-input v-model="form.package.num"></el-input>
					</el-form-item>
					<el-form-item label="包规格">
						<el-input-number v-model="form.package.size" @change="handleChange" :min="1" :max="10"></el-input-number>
					</el-form-item>
					<el-form-item label="清洗类型">
						<el-radio-group v-model="form.resource">
							<el-radio label="机洗"></el-radio>
							<el-radio label="手洗"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="清洗人员">
						<el-select v-model="form.people" placeholder="请选择清洗人员">
							<el-option label="顾四国" value="gusiguo"></el-option>
							<el-option label="邓曲英" value="dengquying"></el-option>
							<el-option label="吴彦祖" value="wuyanzu"></el-option>
							<el-option label="胡歌" value="huge"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="清洗日期">
						<el-col :span="11">
							<el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
					</el-form-item>
					<el-form-item label="清洗机器">
						<el-select v-model="form.machine.name" placeholder="请选择清洗机器">
							<el-option label="科室自洗" value="kszx"></el-option>
							<el-option label="清洗机1" value="machine1"></el-option>
							<el-option label="清洗机2" value="machine2"></el-option>
							<el-option label="洗衣公司" value="cleanShop"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="锅号">
						<el-input v-model="form.machine.num"></el-input>
					</el-form-item>
					<el-form-item label="锅次">
						<el-input v-model="form.machine.time"></el-input>
					</el-form-item>
				</el-row>
				<!-- <el-form-item label="即时配送">
	                        <el-switch v-model="form.delivery"></el-switch>
	                    </el-form-item>
	                    <el-form-item label="活动性质">
	                        <el-checkbox-group v-model="form.type">
	                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
	                        <el-checkbox label="地推活动" name="type"></el-checkbox>
	                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
	                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
	                        </el-checkbox-group>
	                    </el-form-item> -->
				<!-- <el-form-item label="活动形式">
	                        <el-input type="textarea" v-model="form.desc"></el-input>
	                    </el-form-item> -->
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="onSubmit">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 新增按钮 -->
		<el-button class="add-btn" type="primary" size="small" @click=" dialogFormVisible=true">新增记录</el-button>
		<!-- 历史记录表格 -->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="科室">
			</el-table-column>
			<el-table-column prop="name" label="条码号" width="100">
			</el-table-column>
			<el-table-column prop="name" label="循环次数" width="100">
			</el-table-column>
			<el-table-column prop="name" label="包名称" width="80">
			</el-table-column>
			<el-table-column prop="name" label="包编号" width="80">
			</el-table-column>
			<el-table-column prop="name" label="包规格" width="80">
			</el-table-column>
			<el-table-column prop="name" label="清洗类型" width="100">
			</el-table-column>
			<el-table-column prop="name" label="清洗人员" width="100">
			</el-table-column>
			<el-table-column prop="name" label="清洗日期" width="100">
			</el-table-column>
			<el-table-column prop="name" label="清洗机器" width="100">
			</el-table-column>
			<el-table-column prop="name" label="锅号" width="80">
			</el-table-column>
			<el-table-column prop="name" label="锅次" width="80">
			</el-table-column>
			<el-table-column prop="name" label="操作" width="80">
			</el-table-column>
		</el-table>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
					room: "",
					codeNum: "",
					forCount: null,
					package: {
						name: "",
						size: 3,
						num: 1
					},
					people: "",
					date: "",
					machine: {
						name: "",
						num: 12,
						time: 12
					}
				}
			};
		},
		methods: {
			onSubmit() {
				console.log("submit!");
			}
		}
	};
</script>

<style>
	.add-btn {
		float: right;
	}
</style>
