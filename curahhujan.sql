/*
 Navicat Premium Data Transfer

 Source Server         : myLocal
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : curahhujan

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 04/06/2023 00:33:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  CONSTRAINT `foreign_key_admin_user` FOREIGN KEY (`id`) REFERENCES `tejasari` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `foreign_key_admin_user2` FOREIGN KEY (`id`) REFERENCES `wlaharcilacap` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', 'P@ssw0rd');

-- ----------------------------
-- Table structure for months
-- ----------------------------
DROP TABLE IF EXISTS `months`;
CREATE TABLE `months`  (
  `month` int NULL DEFAULT NULL,
  `month_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of months
-- ----------------------------
INSERT INTO `months` VALUES (1, 'January');
INSERT INTO `months` VALUES (2, 'February');
INSERT INTO `months` VALUES (3, 'March');
INSERT INTO `months` VALUES (4, 'April');
INSERT INTO `months` VALUES (5, 'May');
INSERT INTO `months` VALUES (6, 'June');
INSERT INTO `months` VALUES (7, 'July');
INSERT INTO `months` VALUES (8, 'August');
INSERT INTO `months` VALUES (9, 'September');
INSERT INTO `months` VALUES (10, 'October');
INSERT INTO `months` VALUES (11, 'November');
INSERT INTO `months` VALUES (12, 'December');

-- ----------------------------
-- Table structure for tejasari
-- ----------------------------
DROP TABLE IF EXISTS `tejasari`;
CREATE TABLE `tejasari`  (
  `id` int NOT NULL,
  `year` int NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `dewpoint_2m_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `maximum_2m_air_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mean_2m_air_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `minimum_2m_air_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `total_precipitation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `u_component_of_wind_10m` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `v_component_of_wind_10m` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `year`(`year`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tejasari
-- ----------------------------
INSERT INTO `tejasari` VALUES (1, 2015, 1, '21.819', '30.555', '24.456', '20.628', '0.424', '0.008', '0.114');
INSERT INTO `tejasari` VALUES (2, 2015, 2, '21.976', '30.183', '24.431', '20.577', '0.516', '0.042', '-0.166');
INSERT INTO `tejasari` VALUES (3, 2015, 3, '22.327', '30.551', '24.898', '21.139', '0.487', '-0.141', '-0.277');
INSERT INTO `tejasari` VALUES (4, 2015, 4, '22.497', '30.569', '25.079', '21.674', '0.493', '-0.229', '-0.052');
INSERT INTO `tejasari` VALUES (5, 2015, 5, '21.656', '30.222', '24.908', '18.366', '0.139', '-0.143', '0.703');
INSERT INTO `tejasari` VALUES (6, 2015, 6, '20.604', '29.428', '23.753', '17.780', '0.053', '-0.176', '1121');
INSERT INTO `tejasari` VALUES (7, 2015, 7, '19.515', '29.543', '23.615', '16.141', '0.015', '-0.196', '0.995');
INSERT INTO `tejasari` VALUES (8, 2015, 8, '18.781', '30.081', '23.618', '15.752', '0.011', '-0.197', '1428');
INSERT INTO `tejasari` VALUES (9, 2015, 9, '28.529', '32.184', '24.015', '18.730', '0.008', '-0.175', '1721');
INSERT INTO `tejasari` VALUES (10, 2015, 10, '19.198', '32.689', '25.755', '20.215', '0.036', '-0.217', '1218');
INSERT INTO `tejasari` VALUES (11, 2015, 11, '21.954', '31.763', '25.512', '21.833', '0.333', '-0.131', '0.972');
INSERT INTO `tejasari` VALUES (12, 2015, 12, '22.582', '31.150', '25.329', '21.910', '0.481', '0', '0.197');
INSERT INTO `tejasari` VALUES (13, 2016, 1, '22.930', '31.420', '25.816', '22.148', '0.347', '-0.176', '-0.303');
INSERT INTO `tejasari` VALUES (14, 2016, 2, '22.746', '31.144', '25.038', '22.196', '0.582', '-0.062', '-0.068');
INSERT INTO `tejasari` VALUES (15, 2016, 3, '23.099', '31.438', '25.857', '21.456', '0.341', '-0.152', '-0.081');
INSERT INTO `tejasari` VALUES (16, 2016, 4, '23.271', '31.279', '26.003', '22.742', '0.334', '-0.185', '-0.015');
INSERT INTO `tejasari` VALUES (17, 2016, 5, '23.311', '31.533', '26.081', '22.426', '0.225', '-0.163', '0.105');
INSERT INTO `tejasari` VALUES (18, 2016, 6, '22.223', '30.983', '25.273', '20.244', '0.175', '-0.136', '0.402');
INSERT INTO `tejasari` VALUES (19, 2016, 7, '22.123', '30.155', '25.057', '20.547', '0.173', '-0.164', '0.485');
INSERT INTO `tejasari` VALUES (20, 2016, 8, '21.170', '30.326', '24.351', '18.919', '0.116', '-0.232', '0.766');
INSERT INTO `tejasari` VALUES (21, 2016, 9, '22.093', '30.320', '24.783', '20.272', '0.393', '-0.144', '0.389');
INSERT INTO `tejasari` VALUES (22, 2016, 10, '22.341', '30.257', '24.847', '20.996', '0.628', '-0.062', '0.528');
INSERT INTO `tejasari` VALUES (23, 2016, 11, '22.371', '30.839', '24.990', '21.386', '0.487', '-0.029', '0.784');
INSERT INTO `tejasari` VALUES (24, 2016, 12, '22.218', '31.485', '24.920', '21.843', '0.431', '0.105', '0.718');
INSERT INTO `tejasari` VALUES (25, 2017, 1, '22.442', '30.971', '24.866', '21.417', '0.6', '-0.131', '-0.166');
INSERT INTO `tejasari` VALUES (26, 2017, 2, '22.235', '30.025', '24.753', '21.316', '0.502', '-0.037', '-0.164');
INSERT INTO `tejasari` VALUES (27, 2017, 3, '22.329', '30.936', '25.104', '21.418', '0.333', '-0.021', '0.305');
INSERT INTO `tejasari` VALUES (28, 2017, 4, '22.416', '30.642', '25.206', '21.149', '0.363', '-0.104', '0.582');
INSERT INTO `tejasari` VALUES (29, 2017, 5, '22.075', '30.186', '25.146', '20.044', '0.16', '-0.118', '1044');
INSERT INTO `tejasari` VALUES (30, 2017, 6, '22.019', '30.463', '24.981', '19.666', '0.157', '-0.142', '0.71');
INSERT INTO `tejasari` VALUES (31, 2017, 7, '20.645', '28.781', '23.625', '17.594', '0.09', '-0.199', '1443');
INSERT INTO `tejasari` VALUES (32, 2017, 8, '19.769', '28.953', '23.179', '17.915', '0.018', '-0.237', '1673');
INSERT INTO `tejasari` VALUES (33, 2017, 9, '20.308', '30.361', '24.124', '19.093', '0.133', '-0.196', '1465');
INSERT INTO `tejasari` VALUES (34, 2017, 10, '21.792', '30.783', '24.496', '20.620', '0.178', '-0.114', '1421');
INSERT INTO `tejasari` VALUES (35, 2017, 11, '21.983', '30.456', '24.470', '20.984', '0.43', '-0.031', '0.741');
INSERT INTO `tejasari` VALUES (36, 2017, 12, '21.964', '30.873', '24.831', '20.938', '0.349', '0.009', '0.518');
INSERT INTO `tejasari` VALUES (37, 2018, 1, '22.060', '30.215', '24.636', '21.649', '0.507', '-0.123', '-0.158');
INSERT INTO `tejasari` VALUES (38, 2018, 2, '22.001', '30.267', '24.352', '21.204', '0.511', '-0.054', '-0.197');
INSERT INTO `tejasari` VALUES (39, 2018, 3, '22.110', '30.667', '24.977', '20.807', '0.334', '-0.012', '0.483');
INSERT INTO `tejasari` VALUES (40, 2018, 4, '22.536', '30.769', '25.615', '21.286', '0.309', '-0.211', '0.2');
INSERT INTO `tejasari` VALUES (41, 2018, 5, '21.674', '30.428', '25.071', '18.388', '0.106', '-0.14', '0.824');
INSERT INTO `tejasari` VALUES (42, 2018, 6, '21.067', '30.470', '24.294', '18.079', '0.08', '-0.185', '1103');
INSERT INTO `tejasari` VALUES (43, 2018, 7, '18.815', '28.995', '22.593', '16.697', '0.005', '-0.205', '1625');
INSERT INTO `tejasari` VALUES (44, 2018, 8, '18.349', '30.409', '23.047', '16.711', '0.012', '-0.297', '1817');
INSERT INTO `tejasari` VALUES (45, 2018, 9, '20.024', '29.934', '23.509', '17.546', '0.071', '-0.3', '1661');
INSERT INTO `tejasari` VALUES (46, 2018, 10, '20.668', '31.221', '24.799', '20.394', '0.046', '-0.293', '1564');
INSERT INTO `tejasari` VALUES (47, 2018, 11, '22.025', '31.158', '25.026', '21.061', '0.311', '-0.078', '1149');
INSERT INTO `tejasari` VALUES (48, 2018, 12, '22.177', '31.042', '24.939', '21.702', '0.365', '0.134', '1076');
INSERT INTO `tejasari` VALUES (49, 2019, 1, '22.484', '30.804', '24.969', '21.859', '0.519', '-0.088', '-0.202');
INSERT INTO `tejasari` VALUES (50, 2019, 2, '22.531', '31.107', '25.171', '21.555', '0.454', '-0.086', '0.095');
INSERT INTO `tejasari` VALUES (51, 2019, 3, '22.172', '30.475', '24.820', '21.536', '0.52', '-0.038', '0.095');
INSERT INTO `tejasari` VALUES (52, 2019, 4, '22.947', '31.248', '25.706', '22.160', '0.344', '-0.071', '0.421');
INSERT INTO `tejasari` VALUES (53, 2019, 5, '22.028', '30.621', '25.298', '18.743', '0.083', '-0.162', '1038');
INSERT INTO `tejasari` VALUES (54, 2019, 6, '19.609', '30.017', '23.549', '16.465', '0.007', '-0.149', '1457');
INSERT INTO `tejasari` VALUES (55, 2019, 7, '19.008', '29.708', '22.995', '17.284', '0.025', '-0.208', '1564');
INSERT INTO `tejasari` VALUES (56, 2019, 8, '18.320', '29.969', '22.847', '15.742', '0.014', '-0.202', '1749');
INSERT INTO `tejasari` VALUES (57, 2019, 9, '18.593', '31.344', '23.791', '16.511', '0.014', '-0.178', '1707');
INSERT INTO `tejasari` VALUES (58, 2019, 10, '20.153', '31.953', '24.861', '19.599', '0.049', '-0.269', '1731');
INSERT INTO `tejasari` VALUES (59, 2019, 11, '21.374', '31.340', '25.181', '20.286', '0.139', '-0.158', '1352');
INSERT INTO `tejasari` VALUES (60, 2019, 12, '22.501', '32.248', '25.338', '21.843', '0.421', '-0.091', '0.347');

-- ----------------------------
-- Table structure for wlaharcilacap
-- ----------------------------
DROP TABLE IF EXISTS `wlaharcilacap`;
CREATE TABLE `wlaharcilacap`  (
  `id` int NOT NULL,
  `year` int NULL DEFAULT NULL,
  `month` int NULL DEFAULT NULL,
  `dewpoint_2m_temperature` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `maximum_2m_air_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mean_2m_air_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `minimum_2m_air_temperature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `total_precipitation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `u_component_of_wind_10m` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `v_component_of_wind_10m` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wlaharcilacap
-- ----------------------------
INSERT INTO `wlaharcilacap` VALUES (1, 2015, 1, '23.265', '31.109', '26.054', '23.044', '0.344', '0.919', '0.215');
INSERT INTO `wlaharcilacap` VALUES (2, 2015, 2, '23.306', '31.983', '26.002', '22.517', '0.404', '0.477', '-0.159');
INSERT INTO `wlaharcilacap` VALUES (3, 2015, 3, '23.556', '32.057', '26.474', '23367', '0.394', '0.229', '-0.106');
INSERT INTO `wlaharcilacap` VALUES (4, 2015, 4, '23.844', '31.265', '26.633', '23.420', '0.396', '0.204', '-0.085');
INSERT INTO `wlaharcilacap` VALUES (5, 2015, 5, '23.105', '29.960', '26.158', '20.296', '0.081', '-1077', '0.686');
INSERT INTO `wlaharcilacap` VALUES (6, 2015, 6, '22.028', '31.462', '25.159', '20.227', '0.05', '-1629', '0.963');
INSERT INTO `wlaharcilacap` VALUES (7, 2015, 7, '21.390', '29.124', '24.592', '18.783', '0.024', '-1392', '1391');
INSERT INTO `wlaharcilacap` VALUES (8, 2015, 8, '20.825', '29.137', '24.273', '18.714', '0.016', '-1638', '1724');
INSERT INTO `wlaharcilacap` VALUES (9, 2015, 9, '20.690', '30.591', '24.319', '20.115', '0.01', '-1371', '1921');
INSERT INTO `wlaharcilacap` VALUES (10, 2015, 10, '22.025', '31.054', '25.704', '21.029', '0.031', '-0.813', '1805');
INSERT INTO `wlaharcilacap` VALUES (11, 2015, 11, '23.469', '31.439', '26.428', '23.091', '0.194', '-0.504', '1022');
INSERT INTO `wlaharcilacap` VALUES (12, 2015, 12, '23.822', '31.794', '26.694', '23.580', '0.424', '0.335', '0.291');
INSERT INTO `wlaharcilacap` VALUES (13, 2016, 1, '24.261', '32.969', '27.420', '24.292', '0.254', '0.091', '-0.201');
INSERT INTO `wlaharcilacap` VALUES (14, 2016, 2, '24.039', '32.053', '26.655', '24.104', '0.441', '0.484', '-0.067');
INSERT INTO `wlaharcilacap` VALUES (15, 2016, 3, '24.387', '32.028', '27.411', '23.676', '0.292', '-0.032', '-0.071');
INSERT INTO `wlaharcilacap` VALUES (16, 2016, 4, '24.509', '32.837', '27.484', '24.440', '0.302', '-0.233', '0.063');
INSERT INTO `wlaharcilacap` VALUES (17, 2016, 5, '24.596', '32.243', '27.400', '24.327', '0.254', '-0.419', '0.274');
INSERT INTO `wlaharcilacap` VALUES (18, 2016, 6, '23.605', '31.733', '26.647', '22.256', '0.178', '-0.457', '0.243');
INSERT INTO `wlaharcilacap` VALUES (19, 2016, 7, '23.539', '30.679', '26.330', '22.429', '0.146', '-0.841', '0.537');
INSERT INTO `wlaharcilacap` VALUES (20, 2016, 8, '22.739', '31.144', '25.587', '21.202', '0.103', '-1275', '0.792');
INSERT INTO `wlaharcilacap` VALUES (21, 2016, 9, '23.503', '32.290', '26.091', '22.438', '0.336', '-0.507', '0.654');
INSERT INTO `wlaharcilacap` VALUES (22, 2016, 10, '23.590', '31.887', '26.185', '22.727', '0.646', '-0.128', '0.472');
INSERT INTO `wlaharcilacap` VALUES (23, 2016, 11, '23.597', '31.217', '26.332', '23.132', '0.329', '-0.249', '0.532');
INSERT INTO `wlaharcilacap` VALUES (24, 2016, 12, '23.513', '31.902', '26.464', '23.880', '0.425', '1297', '0.558');
INSERT INTO `wlaharcilacap` VALUES (25, 2017, 1, '23.765', '32.208', '26.568', '23.464', '0.523', '0.666', '-0.087');
INSERT INTO `wlaharcilacap` VALUES (26, 2017, 2, '23.589', '30.915', '26.326', '23.362', '0.344', '0.726', '0.049');
INSERT INTO `wlaharcilacap` VALUES (27, 2017, 3, '23.687', '32.105', '26.620', '23.492', '0.242', '0.48', '0.231');
INSERT INTO `wlaharcilacap` VALUES (28, 2017, 4, '23.640', '31.274', '26.568', '22.743', '0.34', '-0.115', '0.413');
INSERT INTO `wlaharcilacap` VALUES (29, 2017, 5, '23.466', '30.722', '26.285', '21.899', '0.149', '-1392', '0.919');
INSERT INTO `wlaharcilacap` VALUES (30, 2017, 6, '23.380', '31.051', '26.128', '20.926', '0.148', '-1219', '0.763');
INSERT INTO `wlaharcilacap` VALUES (31, 2017, 7, '22.112', '39.535', '24.711', '19.978', '0.094', '-1952', '1317');
INSERT INTO `wlaharcilacap` VALUES (32, 2017, 8, '21.392', '37.778', '23.941', '19.656', '0.026', '-1845', '1571');
INSERT INTO `wlaharcilacap` VALUES (33, 2017, 9, '21.940', '29.882', '24.777', '20.097', '0.157', '-1522', '1.6');
INSERT INTO `wlaharcilacap` VALUES (34, 2017, 10, '23.216', '30.113', '25.527', '22.685', '0.188', '-1054', '1202');
INSERT INTO `wlaharcilacap` VALUES (35, 2017, 11, '23.416', '30.335', '25.837', '21.974', '0.451', '0.282', '0.496');
INSERT INTO `wlaharcilacap` VALUES (36, 2017, 12, '23.334', '30.902', '26.350', '23.250', '0.237', '0.84', '0.384');
INSERT INTO `wlaharcilacap` VALUES (37, 2018, 1, '23.461', '32.141', '26.303', '23.676', '0.442', '0.818', '-0.072');
INSERT INTO `wlaharcilacap` VALUES (38, 2018, 2, '23.372', '30.678', '26.051', '22.741', '0.32', '0.732', '-0.023');
INSERT INTO `wlaharcilacap` VALUES (39, 2018, 3, '23.443', '32.300', '26.462', '22.647', '0.228', '0.515', '0.256');
INSERT INTO `wlaharcilacap` VALUES (40, 2018, 4, '23.916', '31.666', '27.010', '23.363', '0.243', '-0.596', '0.262');
INSERT INTO `wlaharcilacap` VALUES (41, 2018, 5, '23.243', '31.020', '26.431', '20.614', '0.089', '-1375', '0.834');
INSERT INTO `wlaharcilacap` VALUES (42, 2018, 6, '22.536', '31.078', '25.614', '20.621', '0.061', '-1634', '1195');
INSERT INTO `wlaharcilacap` VALUES (43, 2018, 7, '20.367', '29.089', '23.732', '18.125', '0.009', '-1703', '1378');
INSERT INTO `wlaharcilacap` VALUES (44, 2018, 8, '20.216', '29.264', '23.878', '19.192', '0.019', '-1876', '1755');
INSERT INTO `wlaharcilacap` VALUES (45, 2018, 9, '21.542', '29.459', '24.534', '19.652', '0.063', '-1585', '1681');
INSERT INTO `wlaharcilacap` VALUES (46, 2018, 10, '22.373', '30.812', '25.654', '22.015', '0.055', '-1397', '1764');
INSERT INTO `wlaharcilacap` VALUES (47, 2018, 11, '23.407', '31.265', '26.151', '22.883', '0.33', '-0.677', '1.09');
INSERT INTO `wlaharcilacap` VALUES (48, 2018, 12, '24.435', '30.827', '26.285', '23.044', '0.36', '0.659', '0.943');
INSERT INTO `wlaharcilacap` VALUES (49, 2019, 1, '23.807', '31.228', '28.584', '23.693', '0.345', '0.726', '-0.073');
INSERT INTO `wlaharcilacap` VALUES (50, 2019, 2, '23.824', '32.116', '26.692', '23.575', '0.23', '0.126', '0.135');
INSERT INTO `wlaharcilacap` VALUES (51, 2019, 3, '23.585', '31.669', '26.360', '23.214', '0.46', '0.345', '0.135');
INSERT INTO `wlaharcilacap` VALUES (52, 2019, 4, '24.237', '32.327', '27.081', '23.743', '0.219', '-0.403', '0.409');
INSERT INTO `wlaharcilacap` VALUES (53, 2019, 5, '23.371', '30.927', '26.632', '21.159', '0.056', '-1606', '1094');
INSERT INTO `wlaharcilacap` VALUES (54, 2019, 6, '21.327', '29.799', '24.470', '18.625', '0.011', '-1488', '1325');
INSERT INTO `wlaharcilacap` VALUES (55, 2019, 7, '20.693', '28.640', '23.950', '19.180', '0.018', '-1766', '1574');
INSERT INTO `wlaharcilacap` VALUES (56, 2019, 8, '20.081', '28.711', '23.521', '18.215', '0.011', '-1553', '1756');
INSERT INTO `wlaharcilacap` VALUES (57, 2019, 9, '20.622', '29.622', '24.130', '18.894', '0.012', '-1397', '1934');
INSERT INTO `wlaharcilacap` VALUES (58, 2019, 10, '21.932', '30.818', '25.566', '21.604', '0.024', '-1045', '1838');
INSERT INTO `wlaharcilacap` VALUES (59, 2019, 11, '23.068', '30.276', '25.743', '21.543', '0.171', '-0.685', '1261');
INSERT INTO `wlaharcilacap` VALUES (60, 2019, 12, '23.741', '32.110', '26.722', '23.491', '0.251', '0.088', '0.295');

SET FOREIGN_KEY_CHECKS = 1;
